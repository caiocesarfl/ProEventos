import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../Util/constants';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormat extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}

