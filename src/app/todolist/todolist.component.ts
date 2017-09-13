import {Component} from '@angular/core';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header (itemAdded)="list.addItem($event)"
                  [title]="title"></app-header>
      <app-main></app-main>
      <app-footer [count]="list.items | countBy:'completed':false"></app-footer>
    </section>
  `,
})

export class TodolistComponent {
  public list: TodolistService;
  public title: string;

  constructor(list: TodolistService) {
    this.list = list;
    this.title = 'TODOS';
  }
}
