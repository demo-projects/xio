import {Component, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styleUrls  : ['./item.component.css']
})
export class ItemComponent  {
  public item: Item = new Item('JS');
}
