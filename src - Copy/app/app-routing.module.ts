import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gurd/auth.guard';
import { HospitalFormComponent } from './admin/hospital-form/hospital-form.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DoctorFormComponent } from './admin/doctor/doctor-form/doctor-form.component';
import { AvailabilityFormComponent } from './admin/doctor/availability-form/availability-form.component';
import { HistoryComponent } from './patient/history/history.component';
import { BookingComponent } from './patient/booking/booking.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { DoctorDashboardComponentComponent } from './admin/doctor/doctor-dashboard-component/doctor-dashboard-component.component';
import { SearchComponentComponent } from './patient/search-component/search-component.component';
import { LoginComponent } from './service/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/hospital-form', component: HospitalFormComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'doctor/registration', component: DoctorFormComponent, canActivate: [AuthGuard], data: { role: 'DOCTOR' } },
  { path: 'doctor/availability', component: AvailabilityFormComponent, canActivate: [AuthGuard], data: { role: 'DOCTOR' } },
  { path: 'doctor/dashboard', component: DoctorDashboardComponentComponent, canActivate: [AuthGuard], data: { role: 'DOCTOR' } },
  { path: 'patient/registration', component: PatientFormComponent },
  { path: 'patient/search', component: SearchComponentComponent, canActivate: [AuthGuard], data: { role: 'PATIENT' } },
  { path: 'patient/booking', component: BookingComponent, canActivate: [AuthGuard], data: { role: 'PATIENT' } },
  { path: 'patient/history', component: HistoryComponent, canActivate: [AuthGuard], data: { role: 'PATIENT' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
