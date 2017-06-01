import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'SearchPipe2'
})
 
export class SearchPipe2 {
  transform(value: Object[], anotherValue: string): Object[] {
    if (value == null) {
      return null;
    }
    if (anotherValue !== undefined) {
      return value.filter((item: Object) => item["cena"].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1);
    } else {
      return value;
    }
  }
}