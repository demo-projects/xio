import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles  : [`
    .line {  text-decoration: underline  }
    .danger {  color: red  }
    .success {  color: green  }
  `],
  template: `
    <app-todolist></app-todolist>

    <!--<input type="checkbox"-->
           <!--(change)="flag = !flag">-->

    <!--<h1 *appIf="flag">CONTENT OF THE TEMPLATE</h1>-->



    <!--<h1 class="line" [ngClass]="{ danger: flag }" >Hello Directives!</h1>-->


    <!--<div ngSwitch="value">-->
    <!--<div *ngSwitchCase="1">1</div>-->
    <!--<div *ngSwitchCase="2">2</div>-->
    <!--<div *ngSwitchDefault>default</div>-->
    <!--</div>-->

  `
})

export class AppComponent {
  flag      = false;
  className = 'danger';
  colors = ['red', 'green', 'blue'];
}
