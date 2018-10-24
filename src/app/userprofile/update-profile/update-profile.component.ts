import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvestorModel} from '../../core/models/investor.model';
import {UserService} from '../user-service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit , OnDestroy {
  pageTitle = 'עדכן פרופיל';
  routeSub: Subscription;
  userSub: Subscription;
  investor: InvestorModel;
  loading: boolean;
  error: boolean;
  private _id: string;
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.routeSub = this.route.params
      .subscribe(params => {
        this._id = params['id'];
        this._getUserById();
      });
  }
  private _getUserById() {
    this.loading = true;
    this.userSub = this.userService.getUserProfileById(this._id)
      .subscribe(
        res => {
          this.investor = res.data;
          this.loading = false;

        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}

