import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  constructor(private commonService: CommonService) {}

  @Input()
  sometext: string = '';

  // parent to child data transfer
  @Output()
  othertext = new EventEmitter<String>();

  sendOtherText(value: string) {
    this.othertext.emit(value);
  }

  total = this.commonService.addTwoNumber(10, 20);
}
