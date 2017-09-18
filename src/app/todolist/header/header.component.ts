import {Component, Output, EventEmitter, Input, ChangeDetectorRef, AfterViewInit, NgZone} from '@angular/core';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @Input() title: string;

  @Output()
  itemAdded = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef, zone: NgZone) {

    zone.runOutsideAngular( () => {

    });

    zone.run( () => '' );

    setTimeout(() => {
      this.title = 'new title';
      cd.detectChanges();
      cd.reattach();
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.cd.detach();
  }
}
