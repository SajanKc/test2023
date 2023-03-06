import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  addTwoNumber(a: number, b: number) {
    return a + b;
  }
}
