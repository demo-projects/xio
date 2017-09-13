import {Component, OnInit} from '@angular/core';
import {TodolistService} from './todolist.service';
import {LoggerService} from '../utils/logger.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">
      <app-header (itemAdded)="list.addItem($event)"
                  title="TOLOZ"></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </section>
  `,
})

export class TodolistComponent {
  public list: TodolistService;

  constructor(list: TodolistService, logger: LoggerService) {
    this.list = list;
    logger.log('Im a component!');
  }
}
