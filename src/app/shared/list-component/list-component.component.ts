import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  @Input()
  inputList;


  @Output() getListData: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
   console.log(this.inputList);
  }



}
