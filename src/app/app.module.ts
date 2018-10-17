import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatRippleModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import {ComponentsModule} from './components/componets.module';
import {AppRoutingModule, MainRoute} from './RouteBasic';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {InvestorService} from './services/investors.service';



@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // UserprofileComponent,
    // SignupComponent,
    SigninComponent,
    MainLayoutComponent,

    ],
  imports: [
    HttpClientModule,
    //HttpClientModule,
    //BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    // MatInputModule,
    MatButtonModule,
     MatRippleModule,
     MatInputModule,
     MatDividerModule,
    // MatTooltipModule,
    MatIconModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
    //RouterModule.forRoot(MainRoute)

  ],
  providers: [InvestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

