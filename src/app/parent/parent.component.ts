import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  constructor(private commonService: CommonService) {}

  textvalue: string = 'superman';

  fromChild: string = '';
  getText(text: any) {
    this.fromChild = text;
  }

  total = this.commonService.addTwoNumber(1, 2);
}
