import {Component} from '@angular/core';
import {TodolistService} from '../todolist.service';

@Component({
  selector   : 'app-list',
  templateUrl: './list.component.html',
  styleUrls  : ['./list.component.css']
})
export class ListComponent {
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;

  }
}
