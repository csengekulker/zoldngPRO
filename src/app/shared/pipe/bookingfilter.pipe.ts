import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingfilter'
})
export class BookingfilterPipe implements PipeTransform {

  transform(values: any[], filter: Boolean): any {
    if (!values || !filter) {
      return values;
    } else if (filter) {
      return values.filter(value => value.positionId == filter);

    }
  }

}
