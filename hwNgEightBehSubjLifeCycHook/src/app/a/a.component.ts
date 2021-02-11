import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  exmplViewInteraction: any;
  someValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Variant 1
    // this.someValue = this.dataService.getCurrentState();

    // Variant 2
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);
  }

  increment(): void {
    this.dataService.setNewState();
  }

}
