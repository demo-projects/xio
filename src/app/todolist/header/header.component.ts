import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: string;

  @Output()
  itemAdded = new EventEmitter<string>();


}
