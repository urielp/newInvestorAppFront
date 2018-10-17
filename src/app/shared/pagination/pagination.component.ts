import {Component, EventEmitter, Input, OnInit, Output, Renderer} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageSize;
  private arr;
  private activeIndex;

  @Output()
  pageSelection = new EventEmitter<{page: number}>();
  constructor() { }

  ngOnInit() {
    this.arr = new Array(this.pageSize);
    this.activeIndex = 0;
  }
  toggleActive(id) {
    this.activeIndex = id;
    this.pageSelection.emit({page: this.activeIndex + 1});
  }

}
