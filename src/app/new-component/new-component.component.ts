import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
})
export class NewComponentComponent {
  firstName = 'Sajan';
  img = 'favicon.ico';

  defaultValue = 'Sajan Kc';

  passvaluetocomponent(event: any) {
    console.log(event.target.value);
  }
}
