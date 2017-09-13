import {NgModule} from '@angular/core';
import {CountByPipe} from './count-by.pipe';
import {LoggerService} from './logger.service';
import {XilowPipe} from './xilow.pipe';

@NgModule({
  providers   : [LoggerService],
  declarations: [XilowPipe, CountByPipe],
  exports     : [XilowPipe, CountByPipe],
})
export class UtilsModule {
}
