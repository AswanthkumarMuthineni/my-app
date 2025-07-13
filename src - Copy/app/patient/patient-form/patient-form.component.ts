import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
patientForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      uniqueId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      this.apiService.createPatient(this.patientForm.value).subscribe(() => {
        alert('Patient registered successfully');
      });
    }
  }
}
