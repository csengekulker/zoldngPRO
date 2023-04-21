import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientfilter'
})
export class ClientfilterPipe implements PipeTransform {

  transform(list: any[], filter: string): any {
    return list ? list.filter(item => item.fullName.search(new RegExp(filter, 'i')) > -1) : [];
  }
}
