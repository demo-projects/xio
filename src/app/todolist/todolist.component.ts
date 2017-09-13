import { Component, OnInit } from '@angular/core';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </section>
  `,
})

export class TodolistComponent implements OnInit {
  public list: TodolistService;

  constructor(list: TodolistService) {
   this.list = list;
  }

  ngOnInit() {
  }

}
