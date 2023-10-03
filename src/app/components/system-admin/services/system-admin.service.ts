import { Injectable } from '@angular/core';
import { IEmployeeAccount } from '../models/system-admin.model';
import { Observable, from } from 'rxjs';
const mockData: IEmployeeAccount[] = [
  {
    firstName: 'Erling',
    lastName: 'Haaland',
    gender: 1,
    dob: '01/01/1999',
    position: 'Frontend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
  {
    firstName: 'Bernado',
    lastName: 'Silva',
    gender: 1,
    dob: '01/01/1999',
    position: 'Backend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    gender: 1,
    dob: '01/01/1999',
    position: 'Tester',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
  {
    firstName: 'Erling',
    lastName: 'Haaland',
    gender: 1,
    dob: '01/01/1999',
    position: 'Frontend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
  {
    firstName: 'Bernado',
    lastName: 'Silva',
    gender: 1,
    dob: '01/01/1999',
    position: 'Backend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    gender: 1,
    dob: '01/01/1999',
    position: 'Tester',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
  },
];
@Injectable({
  providedIn: 'root',
})
export class SystemAdminService {
  getEmployees(): Observable<IEmployeeAccount[]> {
    return from([mockData]);
  }
}
