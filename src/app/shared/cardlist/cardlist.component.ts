import { Component, OnInit } from '@angular/core';
import {InvestorService} from '../../services/investors.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  clientList = [];
  pageSize: number;

  constructor(private investorService: InvestorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.investorService.getInvestorsList().subscribe((data: any) => {
      if ( data.success ) {
        console.log(data.data.pages);
        this.pageSize = data.data.pages;
        this.clientList = data.data.docs;
        console.log(this.pageSize);
      }
    });
  }

  onLoadProfile(userId) {
    this.router.navigate(['/user-profile', userId], { relativeTo: this.route });
    console.log(userId);
  }


}
