import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user-service';
import {NotificationsService} from '../services/notifications.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {InvestorService} from '../services/investors.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit , OnDestroy{

  @Input()
  investor;
  userId;
  pageTitle: "עדכון פרופיל";
  prametersSubscription: Subscription;
  userSubscription: Subscription;
  loading: boolean;
  error: boolean;
  user: any;
  hasId: boolean;
  constructor(
              private investorService: InvestorService,
              private notification: NotificationsService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) { }
  // user = {
  //   FirstName: 'First Name',
  //   LastName : 'Last Name',
  //   Email : 'Email@Mail.com',
  //   Address: 'some address some place',
  //   City: 'some city in the world',
  //   Country: 'some country ',
  //   PostalCode: 111111,
  //   Comments: 'some comments',
  //   Company: 'Google',
  //   userName : 'userName'
  // };
  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.prametersSubscription = this.route.params
      .subscribe(paramas => {
        this.userId = paramas['id'];
        this.hasId = !!this.userId;
        //this._getUserById();
    });
  }

  private _getUserById() {
    this.loading = true;
    this.userSubscription = this.investorService.getUserProfileById(this.userId)
      .subscribe(
        res => {
          if (res.success) {
            this.user = res.data;
           }
        }
          ,
         err => {
        console.log(err);
        this.loading = false;
        this.error = true;
        }
    );
  }
  //unsubscribe
  ngOnDestroy() {
    this.prametersSubscription.unsubscribe();
    //this.userSubscription.unsubscribe();
  }

  print() {
    console.log(this.user);
  }

}
