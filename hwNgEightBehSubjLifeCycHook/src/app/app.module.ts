import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {RouterModule} from '@angular/router';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    LifeCycleHookComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'a', component: AComponent},
      {path: 'b', component: BComponent},
      {path: 'LCH', component: LifeCycleHookComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
