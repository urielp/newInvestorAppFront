import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ENV } from '../core/env.config';
import {ListComponentComponent} from '../shared/list-component/list-component.component';
import {ProjectsService} from '../services/project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  private projectsItems;
  private projectsListSubscription: Subscription;
  constructor(private projectsListService: ProjectsService) { }

  ngOnInit() {
  //console.log(ENV);
  this.getData();
  }

  getData() {
    this.projectsListSubscription = this.projectsListService.getProjectsrsList().subscribe(data => {
      console.log(data.data.docs);
     this.projectsItems = data.data.docs;
    });
  }

  ngOnDestroy() {
    this.projectsListSubscription.unsubscribe();
  }
}
