import { Component, OnInit } from '@angular/core';
import { AuthCasApereoService } from './auth-cas-apereo.service';
import { AuthStorageService } from './auth-storage.service';

@Component({
  selector: 'auth-cas-apereo',
  templateUrl: './auth-cas-apereo.html',
  styleUrls: ['./auth-cas-apereo.css']
})
export class AuthCasApereoComponent implements OnInit {

  constructor(private auth: AuthCasApereoService, private authStorage: AuthStorageService) { }
  isLoad: boolean = false;

  ngOnInit() {
    if (!this.getLogin()) {
      this.saveTicket();
      this.auth.verifyLogin().then();
    }
    if (this.auth.isAuthenticated() && !this.getLogin()) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else if (!this.auth.isAuthenticated()) {
      this.isLoad = false;
    } else {
      this.isLoad = true;
    }
  }

  saveTicket() {
    let ticket = window.location.search.replace('?ticket=', '')

    if (ticket) {
      this.authStorage.saveTicket(ticket)
    }
  }

  getLogin() {
    return this.authStorage.getLogin();
  }

  getTicket() {
    return this.authStorage.getTicket();
  }
}
