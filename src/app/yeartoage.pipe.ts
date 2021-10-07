import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yeartoage'
})
export class YeartoagePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let resAge = 0;
    let currentYear = (new Date()).getFullYear();
    resAge = currentYear - value;
    return resAge;
  }

}
