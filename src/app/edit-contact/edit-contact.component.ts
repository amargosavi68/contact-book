import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact, ContactService } from '../service/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  selectedContact!: Contact

  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router, private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.getNavigationData();
    this.contactForm = this.fb.group({
      name: [this.selectedContact?.name, [Validators.required]],
      email: [this.selectedContact?.email, [Validators.email, Validators.required]],
      phoneWork: [this.selectedContact?.phone.work, [Validators.required]],
      phoneMobile: [this.selectedContact?.phone.mobile, [Validators.required]]
    })
  }

  getNavigationData() {
    let state = window.history.state;
    if (state && state?.selectedContact) {
      this.selectedContact = JSON.parse(state.selectedContact);
    }
    console.log(this.selectedContact);
  }

  updateContact(): void {

  }

}
