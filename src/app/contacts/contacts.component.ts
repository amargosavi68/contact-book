import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts!: Contact[];
  selectedContact!: Contact;

  isContactSelected: boolean = false;

  listClass = "list-group-item";
  listSelectedClass = "list-group-item bg-dark text-light";

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  setIsContactSelected(): void {
    this.isContactSelected = !this.isContactSelected;
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(data => this.contacts = data);
  }

  onContactClicked(contact: Contact): void {
    this.setIsContactSelected();
    this.selectedContact = contact;
  }

  onEditBtnClick(): void {
    this.router.navigate(['/edit'], {
      state: {
        selectedContact: JSON.stringify(this.selectedContact),
      },
    })
  }

}
