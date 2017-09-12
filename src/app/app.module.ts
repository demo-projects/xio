import { TodolistModule } from './todolist/todolist.module';
import { TodolistComponent } from './todolist/todolist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {

  }

}

