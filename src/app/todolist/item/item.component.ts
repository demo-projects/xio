import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Item} from '../item';

// <app-item [item]="{}" (destroy)="">

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styleUrls  : ['./item.component.css']
})
export class ItemComponent  {
  @Input() item: Item;
  @Output() destroy = new EventEmitter<Item>();
}
