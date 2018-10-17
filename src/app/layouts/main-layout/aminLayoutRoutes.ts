import { Routes } from '@angular/router';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserprofileComponent} from '../../userprofile/userprofile.component';
import {SigninComponent} from '../../auth/signin/signin.component';
import {AuthGuard} from '../../auth/auth-guard.service';
import {SignupComponent} from '../../auth/signup/signup.component';


export const MainLayoutRoute: Routes = [
    {path: '' , component: DashboardComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'user-profile' , component: UserprofileComponent },
  { path: 'user-profile/:id' , component: UserprofileComponent }
  // {path: 'signin', component: SigninComponent}
];
