import {Component, OnInit} from '@angular/core';
import {TodolistService} from '../todolist.service';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.css']
})
export class MainComponent  {
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;
  }
}
