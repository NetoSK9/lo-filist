import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'localDateTimePipe'
})
export class LocalDateTimePipe implements PipeTransform {
  
  transform(date: string): string {
      let now = new Date();
      
      return ("" + now.getDay() + "/" + now.getMonth() + "/" + now.getFullYear());
  }

}
