import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AComponent} from '../a/a.component';
import {BComponent} from '../b/b.component';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, OnDestroy {

  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(AComponent)
  b: BComponent;
  @ViewChild('xxx')
  xxx: ElementRef;

  // life cycle hook #1
  constructor() {
    console.log('Constructor');
    console.log(this.a); // undefined
    console.log(this.b); // undefined
  }

  // life cycle hook #2 -  починає діяти коли в компоненті відправцьовують input, output... і приходять зовнішні дані
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // life cycle hook #3 - як всі дані проініціалізувалось відпрацьовує цей Хук
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.a); // undefined
    console.log(this.b); // undefined
  }

  // life cycle hook #4 - як якась змінна починає змінюватись відпрацьовує цей Хук (бажано не використовувати)
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // part of life cycle hook #4.1 - лише після того як всі компоненти і їхні внутрішні компоненти проініціалізувались відпрацьовує цей Хук (бажано не використовувати)
  ngAfterViewInit(): void {
    console.log(this.a); // OK
    console.log(this.b); // OK
    this.a.exmplViewInteraction = 'Initialization from LCH Component';
    this.xxx.nativeElement.innerText = 'Text was changed from LCH ngAfterInit';
  }

  // life cycle hook #5 - як щось видаляється з компоненти відпрацьовує цей Хук
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
