import {NgModule} from '@angular/core';
import {CountByPipe} from './count-by.pipe';
import {LoggerService} from './logger.service';
import {XilowPipe} from './xilow.pipe';
import {StorageService} from './storage.service';
import { MarkerDirective } from './marker.directive';
import { IfDirective } from './if.directive';

@NgModule({
  providers   : [LoggerService, StorageService],
  declarations: [XilowPipe, CountByPipe, MarkerDirective, IfDirective],
  exports     : [XilowPipe, CountByPipe, MarkerDirective, IfDirective],
})
export class UtilsModule {
}
