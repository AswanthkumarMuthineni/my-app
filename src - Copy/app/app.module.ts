import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalFormComponent } from './admin/hospital-form/hospital-form.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorFormComponent } from './admin/doctor/doctor-form/doctor-form.component';
import { AvailabilityFormComponent } from './admin/doctor/availability-form/availability-form.component';
import { DoctorDashboardComponentComponent } from './admin/doctor/doctor-dashboard-component/doctor-dashboard-component.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { SearchComponentComponent } from './patient/search-component/search-component.component';
import { BookingComponent } from './patient/booking/booking.component';
import { HistoryComponent } from './patient/history/history.component';
import { TableComponent } from './shearedcomonets/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './service/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HospitalFormComponent,
    AdminDashboardComponent,
    DoctorFormComponent,
    AvailabilityFormComponent,
    DoctorDashboardComponentComponent,
    PatientFormComponent,
    SearchComponentComponent,
    BookingComponent,
    HistoryComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
       BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    
   
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
