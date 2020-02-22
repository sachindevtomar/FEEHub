import {Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../_helpers';
import { CoursesComponent } from '../courses/courses.component';
import { FeaturesComponent } from '../features/features.component';


export const routes: Routes = [
    {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
    {path: 'contactus', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch:'full'}
];

