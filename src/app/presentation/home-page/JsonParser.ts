import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'join'
})
export class JsonParser implements PipeTransform {
  transform(array: any, start?: any, end?: any): any {
    let result = array;
    if (start !== undefined) {
      if (end !== undefined) {
        result = array.slice(start, end);
      } else {
        result = array.slice(start, result.length);
      }
    }
    return result.join(', ');
  }
}


@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    return _.sortBy(array, [args]);
  }

}
