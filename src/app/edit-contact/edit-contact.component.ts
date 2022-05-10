import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.getNavigationData();
  }

  getNavigationData() {
    // if (this.router.getCurrentNavigation().extras.state) {
    //   this.routeState = this.router.getCurrentNavigation().extras.state;
    //   if (this.routeState) {
    //     this.data.frontEnd = this.routeState.frontEnd ? JSON.parse(this.routeState.frontEnd) : '';
    //     this.data.site = this.routeState.site ? this.routeState.site : '';
    //   }
    // }

    console.log(this.router.getCurrentNavigation());
  }

}
