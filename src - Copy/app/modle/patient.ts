export interface Patient {
  id?: number;
  name: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  dateOfBirth: string;
  uniqueId: string;
}