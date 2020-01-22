import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';

@Pipe({
  name: 'a'
})
export class FilterPipe implements PipeTransform {

  transform( values: Hero[], filterVal: string): Hero[] {
    
    const filteredArray: Hero[] = [];

    values.forEach(value => {
      
      if (value.name.toLowerCase()
      .match(
        filterVal.toLowerCase()
        )) {
       filteredArray.push(value);
        }
    });
   
    return filteredArray;
  }

}
