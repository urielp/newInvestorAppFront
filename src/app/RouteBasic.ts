import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {UserService} from './userprofile/user-service';
import {NotificationsService} from './services/notifications.service';
import {AuthService} from './auth/authenticate.service';


// export const MainRoute: Routes = [
//   { path: '' ,   component: DashboardComponent, canActivate: [AuthGuard] },
//   { path: 'dashboard' ,   component: DashboardComponent },
//   { path: 'user-profile' , component: UserprofileComponent },
//   {path: 'signin', component: SigninComponent}
// ];

export const MainRoute: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(MainRoute)
  ],
  providers: [ UserService, NotificationsService, AuthService, AuthGuard ],
  exports: [
  ],
})
export class AppRoutingModule { }
