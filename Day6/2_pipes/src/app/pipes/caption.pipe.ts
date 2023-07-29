import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caption'
})
export class CaptionPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Show Full Date' : 'Show Short Date';
  }

}
