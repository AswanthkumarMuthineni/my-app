import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  hospitalRevenue: any[] = [];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Revenue ($)',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
      }
    ]
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHospitalRevenue(1).subscribe(data => {
      this.hospitalRevenue = data;
      this.updateChartData();
    });
  }

  private updateChartData() {
    // Example: Aggregate revenue by doctor and department
    const doctorRevenueMap = new Map<string, number>();
    const departmentRevenueMap = new Map<string, number>();

    this.hospitalRevenue.forEach(appointment => {
      const doctorId = `Doctor ${appointment.doctorId}`;
      const departmentId = `Department ${appointment.hospitalId}`; // Simplified; replace with actual department lookup
      doctorRevenueMap.set(doctorId, (doctorRevenueMap.get(doctorId) || 0) + appointment.hospitalRevenue);
      departmentRevenueMap.set(departmentId, (departmentRevenueMap.get(departmentId) || 0) + appointment.hospitalRevenue);
    });

    this.barChartLabels = [
      ...Array.from(doctorRevenueMap.keys()),
      ...Array.from(departmentRevenueMap.keys())
    ];
    this.barChartData.labels = this.barChartLabels;
    this.barChartData.datasets[0].data = [
      ...Array.from(doctorRevenueMap.values()),
      ...Array.from(departmentRevenueMap.values())
    ];
  }
}
