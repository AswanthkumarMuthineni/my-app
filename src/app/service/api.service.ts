import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../modle/hospital';
import { Doctor } from '../modle/doctor';
import { Appointment } from '../modle/appoinentment';
import { Patient } from '../modle/patient';


@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.baseUrl}/hospitals`);
  }
  createHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(`${this.baseUrl}/hospitals`, hospital);
  }
  createDepartment(department: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/departments`, department);
  }
  getDoctors(query?: any): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/doctors`, { params: query });
  }
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.baseUrl}/doctors`, doctor);
  }
  createDoctorHospital(doctorHospital: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/doctorHospitals`, doctorHospital);
  }
  createAvailability(availability: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/availabilities`, availability);
  }
  getDoctorEarnings(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments?doctorId=${doctorId}`);
  }
  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}/patients`, patient);
  }
  getAvailabilities(doctorId: number, hospitalId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/availabilities?doctorId=${doctorId}&hospitalId=${hospitalId}`);
  }
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}/appointments`, appointment);
  }
  getPatientHistory(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments?patientId=${patientId}`);
  }
  getHospitalRevenue(hospitalId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments?hospitalId=${hospitalId}`);
  }
}