import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {


  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }

  ngOnInit(): void {
  }

}
