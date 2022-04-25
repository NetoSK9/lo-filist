import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'localDateTimePipe'
})
export class LocalDateTimePipe implements PipeTransform {
  
  transform(date: string): string {
      let moment = new Date();
      
      return moment.getMinutes().toString();
  }

}
