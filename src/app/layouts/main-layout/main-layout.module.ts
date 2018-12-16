import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule
} from '@angular/material';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserprofileComponent } from '../../userprofile/userprofile.component';
import {MainLayoutRoute} from './aminLayoutRoutes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from '../../userprofile/user-service';
import {NotificationsService} from '../../services/notifications.service';
import { SignupComponent } from '../../auth/signup/signup.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import {AuthService} from '../../auth/authenticate.service';
import {AuthGuard} from '../../auth/auth-guard.service';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

import {HttpClientModule} from '@angular/common/http';
import {CommonModule, DatePipe} from '@angular/common';
import {CardlistComponent} from '../../shared/cardlist/cardlist.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ProfileDetailsComponent} from '../../userprofile/profile-details/profile-details.component';
import {ProfileCreatorComponent} from '../../userprofile/profile-creator/profile-creator.component';
import {UpdateProfileComponent} from '../../userprofile/update-profile/update-profile.component';
import {ProfileFormComponent} from '../../userprofile/profile-form/profile-form.component';
import {SocketIoService} from '../../core/socket.io.service';
import {ListComponentComponent} from '../../shared/list-component/list-component.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoute),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserprofileComponent,
    ProfileDetailsComponent,
    SignupComponent,
    PaginationComponent,
    CardlistComponent,
    ProfileCreatorComponent,
    UpdateProfileComponent,
    ProfileFormComponent,
    ListComponentComponent
   // SigninComponent,
  ],
  providers: [ UserService, NotificationsService, AuthService, SocketIoService, AuthGuard, DatePipe ],
})

export class MainLayoutModule {}
