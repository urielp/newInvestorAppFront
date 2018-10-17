import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvestorService} from '../../services/investors.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit, OnDestroy {

  clientList = [];
  pageSize: number;
  pageSelectionSubscriber: Subscription;
  investorListSubscription: Subscription;

  constructor(private investorService: InvestorService, private router: Router, private route: ActivatedRoute) {
  }

  // initialise the client list
  ngOnInit() {
    this.investorListSubscription = this.investorService.getInvestorsList().subscribe((data: any) => {
      if ( data.success ) {
        console.log(data.data.pages);
        this.pageSize = data.data.pages;
        this.clientList = data.data.docs;
        console.log(this.pageSize);
      }
    });
  }
// loading client profile
  onLoadProfile(userId) {
    this.router.navigate(['/user-profile', userId], { relativeTo: this.route });;
  }


  // getting client list by page(default page 1 )
  onPageSelection(pagenumber: {page: number}) {
   this.pageSelectionSubscriber = this.investorService.getInvestorListByPage(pagenumber).subscribe((results) => {
        this.clientList = results.data.docs;
    });
  }
  ngOnDestroy() {
    if (this.pageSelectionSubscriber) {this.pageSelectionSubscriber.unsubscribe(); }

    this.investorListSubscription.unsubscribe();
  }
}
