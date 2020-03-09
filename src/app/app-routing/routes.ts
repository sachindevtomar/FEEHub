import {Routes} from '@angular/router';
import { AuthGuard } from '../_helpers';


export const routes: Routes = [
    {
        path:'home', 
        loadChildren: '../components/home/home.module#HomeModule', 
        canActivate: [AuthGuard]
    },
    { 
        path: 'features', 
        loadChildren: '../components/features/features.module#FeaturesModule',
        canActivate: [AuthGuard] 
    },
    {
        path: 'login', 
        loadChildren: '../components/login/login.module#LoginModule',
    },
    {
        path: 'courses', 
        loadChildren: '../components/courses/courses.module#CoursesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'editprofile', 
        loadChildren: '../components/editprofile/editprofile.module#EditprofileModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'coursedetails/:id', 
        loadChildren: '../components/coursedetails/coursedetails.module#CoursesdetailsModule',
        canActivate: [AuthGuard]
    },
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch:'full'
    }
];

