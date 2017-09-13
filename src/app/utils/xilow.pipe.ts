import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'xilow'
})
export class XilowPipe implements PipeTransform {

  transform(value: string, suffix: string): string {
    return value.toLowerCase() + suffix;
  }

}
