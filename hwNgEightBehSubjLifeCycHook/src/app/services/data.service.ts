import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<number>(0);

  constructor() { }

  // Variant 1 - value(тобто 0 з data) буде оновлятись лише при зміні лінки, при переході з компонент
  // getCurrentState(): number {
  //   return this.data.getValue();
  // }
  // setNewState(): void {
  //   this.data.next(this.getCurrentState() + 1);
  // }

  // Variant 2 - value(тобто 0 з data) буде оновлятись одразу як буде мінятись
  getCurrentState(): BehaviorSubject<number> {
    return this.data;
  }
  setNewState(): void {
    this.data.next(this.data.getValue() + 1);
  }


}
