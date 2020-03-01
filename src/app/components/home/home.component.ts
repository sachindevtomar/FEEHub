import { Component, OnInit } from '@angular/core';
import { Course } from "../../models/course";
import { COURSES } from "../../Shared/courses";
import { Feature } from "../../models/feature";
import { FEATURES } from "../../Shared/features";
import { AuthenticationService } from "../../services/authentication.service";
import { HelperMethods } from '@app/_helpers/helper.methods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // dish: Dish;
  // promotion: Promotion;
  // leader: Leader;
  courses: Course[] = COURSES;
  features: Feature[] = FEATURES;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  name = this.currentUser.name;
  role = this.currentUser.role;
  constructor(
    private authenticationService: AuthenticationService,
    public helperMethods: HelperMethods) {
     }

  ngOnInit() {
    
    // this.dish = this.dishservice.getFeaturedDish();
    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.leader = this.leaderservice.getFeaturedLeader();
  } 
}
