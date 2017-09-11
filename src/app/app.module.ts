import { TodolistComponent } from './todolist/todolist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TodolistComponent],
  imports     : [BrowserModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {

  }

}

