import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.scss']
})
export class HospitalFormComponent {
 hospitalForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.hospitalForm.valid) {
      this.apiService.createHospital(this.hospitalForm.value).subscribe(() => {
        alert('Hospital registered successfully');
      });
    }
  }
}
