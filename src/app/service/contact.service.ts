import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Contact {
  name: string,
  email: string,
  phone: {
    work: string,
    mobile: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {
      name: 'Amar',
      email: 'Amar@gosavi.com',
      phone: {
        work: '255-262919',
        mobile: '1111122222'
      }
    },
    {
      name: 'Sarvesha',
      email: 'saru@sawant.com',
      phone: {
        work: '255-321212',
        mobile: '9922992299'
      }
    }
  ]

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }
}
