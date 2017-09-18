import {NgModule} from '@angular/core';
import {CountByPipe} from './count-by.pipe';
import {LoggerService} from './logger.service';
import {XilowPipe} from './xilow.pipe';
import {StorageService} from './storage.service';
import { MarkerDirective } from './marker.directive';

@NgModule({
  providers   : [LoggerService, StorageService],
  declarations: [XilowPipe, CountByPipe, MarkerDirective],
  exports     : [XilowPipe, CountByPipe, MarkerDirective],
})
export class UtilsModule {
}
