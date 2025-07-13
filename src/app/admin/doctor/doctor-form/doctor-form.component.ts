import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent {
  doctorForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.doctorForm = this.fb.group({
      name: ['', Validators.required],
      qualifications: ['', Validators.required],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      this.apiService.createDoctor(this.doctorForm.value).subscribe(() => {
        alert('Doctor registered successfully');
      });
    }
  }
}
