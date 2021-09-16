import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../shared/models/iitem.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: IItem[], order: number): IItem[] {
    if (order === 1 || order === -1) {
      return items.sort((a, b) => (+a.price - +b.price) * order);
    }

    if (order === 2 || order === -2) {
      return items.sort((a, b) => (+a.rating - +b.rating) * order);
    }

    return items;
  }
}
