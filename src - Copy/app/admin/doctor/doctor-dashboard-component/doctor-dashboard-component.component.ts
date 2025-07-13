import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-doctor-dashboard-component',
  templateUrl: './doctor-dashboard-component.component.html',
  styleUrls: ['./doctor-dashboard-component.component.scss']
})
export class DoctorDashboardComponentComponent {
  earnings: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDoctorEarnings(1).subscribe(data => {
      this.earnings = data;
    });
  }
}
