import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string|any, searchStatus?: any): any {
    return value.filter(function(search:any){
return search.status.indexOf(searchStatus)>-1
    })
  }

}
