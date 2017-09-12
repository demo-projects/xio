import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
