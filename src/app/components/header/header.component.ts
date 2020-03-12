import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  name = this.currentUser.name;
  role = this.currentUser.role;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
