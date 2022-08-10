import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namelastname'
})
export class NamelastnamePipe implements PipeTransform {

  transform(value: any, lastname: string): String {
    return value + ' ' + lastname;   
  }

}
