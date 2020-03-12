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

  public courses: Course[] = COURSES;
  public coursesWhenNoFeatureTile: Course[] = [];
  public features: Feature[] = FEATURES;
  public featuresWhenNoCourseTile: Feature[] = [];
  public currentUser = JSON.parse(localStorage.getItem('currentUser'));
  name = this.currentUser.name;
  role = this.currentUser.role;
  constructor(
    private authenticationService: AuthenticationService,
    public helperMethods: HelperMethods) {
  }

  ngOnInit() {

    var Count = 0;
    this.courses.forEach(course => {
      if (Count >= 3)
        this.coursesWhenNoFeatureTile.push(course);
      Count++;
    });
    Count = 0;
    this.features.forEach(feature => {
      if (Count >= 3)
        this.featuresWhenNoCourseTile.push(feature);
      Count++;
    });
    // this.dish = this.dishservice.getFeaturedDish();
    // this.promotion = this.promotionservice.getFeaturedPromotion();
    // this.leader = this.leaderservice.getFeaturedLeader();
  }

  public CanViewBothCourseAndFeaturesTile(): boolean {
    return this.helperMethods.userHasClaim("CanViewCourses") && this.helperMethods.userHasClaim("CanViewFeatures");
  }
}
