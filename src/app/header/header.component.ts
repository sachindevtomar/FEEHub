import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';

import { AuthenticationService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  openLoginForm() {
    //this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
