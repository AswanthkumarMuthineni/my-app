import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {
  specializationId: any;
  hospitalId: any;
  date: any;
  doctors: any[] = [];

  constructor(private apiService: ApiService) {}

  search() {
    const query = {
      specializationId: this.specializationId,
      hospitalId: this.hospitalId,
      date: this.date
    };
    this.apiService.getDoctors(query).subscribe(data => {
      this.doctors = data;
    });
  }
}
