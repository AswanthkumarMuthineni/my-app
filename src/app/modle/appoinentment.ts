export interface Appointment {
  id?: number;
  patientId: number;
  doctorId: number;
  hospitalId: number;
  availabilityId: number;
  consultationFee: number;
  doctorRevenue: number;
  hospitalRevenue: number;
  appointmentTime: string;
  status: 'BOOKED' | 'COMPLETED' | 'CANCELLED';
}