import {Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../_helpers';
import { CoursesComponent } from '../components/courses/courses.component';
import { FeaturesComponent } from '../components/features/features.component';


export const routes: Routes = [
    {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch:'full'}
];

