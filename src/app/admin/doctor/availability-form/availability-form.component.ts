import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-availability-form',
  templateUrl: './availability-form.component.html',
  styleUrls: ['./availability-form.component.scss']
})
export class AvailabilityFormComponent {
  availabilityForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.availabilityForm = this.fb.group({
      doctorId: ['', Validators.required],
      hospitalId: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.availabilityForm.valid) {
      this.apiService.createAvailability(this.availabilityForm.value).subscribe(() => {
        alert('Availability added');
      });
    }
  }
}
