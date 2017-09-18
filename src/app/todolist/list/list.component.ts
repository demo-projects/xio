import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {TodolistService} from '../todolist.service';
import {Item} from '../item';

@Component({
  selector   : 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls  : ['./list.component.css']
})
export class ListComponent {

  @Input() items: Item[];

  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;

  }
}
