import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchesCategory'
})
export class MatchesCategoryPipe implements PipeTransform {

  transform(items: Array<any>, status: string): Array<any> {
    return items.filter(item => item.status === status);
  }

}
