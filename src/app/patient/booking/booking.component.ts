import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.bookingForm = this.fb.group({
      patientId: ['', Validators.required],
      doctorId: ['', Validators.required],
      hospitalId: ['', Validators.required],
      availabilityId: ['', Validators.required],
      consultationFee: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const appointment = {
        ...this.bookingForm.value,
        doctorRevenue: this.bookingForm.value.consultationFee * 0.6,
        hospitalRevenue: this.bookingForm.value.consultationFee * 0.4,
        appointmentTime: new Date().toISOString(),
        status: 'BOOKED'
      };
      this.apiService.createAppointment(appointment).subscribe(() => {
        alert('Appointment booked');
      });
    }
  }
}
