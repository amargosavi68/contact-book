import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Contact {
  _id?: string,
  name: string,
  email: string,
  phone: {
    work: string,
    mobile: string,
    _id?: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  backendURL: string = "http://localhost:3000";

  private contacts!: Contact[];

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.backendURL+"/contacts");
  }

  updateContact(contact: Contact): Observable<string> {
    return this.http.put<string>(this.backendURL+"/editcontact", contact);
  }
}
