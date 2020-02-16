import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';

import { AuthGuard } from '../_helpers';
import { CoursesComponent } from '@app/courses/courses.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'menu', component: MenuComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dishdetail/:id', component: DishdetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch:'full'}
];

