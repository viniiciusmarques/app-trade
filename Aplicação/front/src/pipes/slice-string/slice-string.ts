import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString',
})
export class SliceStringPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 20) {
      return `${value.substring(0,20)}...`;
    } else {
      return value;
    }
  }
}
