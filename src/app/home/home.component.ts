import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {Leader} from '../shared/leader';
import { LeaderService } from "../services/leader.service";
import { Course } from "../Shared/course";
import { COURSES } from "../Shared/courses";
import { Feature } from "../Shared/feature";
import { FEATURES } from "../Shared/features";
import { AuthenticationService } from "../services/authentication.service";
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor(private dishservice: DishService, 
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.dish = this.dishservice.getFeaturedDish();
    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.leader = this.leaderservice.getFeaturedLeader();
  }  
}
