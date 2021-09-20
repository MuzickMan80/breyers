import { Pipe, PipeTransform } from '@angular/core';
import { Breyer } from './horse-list.service';

@Pipe({ name: 'horseListFilter' })
export class HorseListFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Breyer[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    const filtered = items.filter(it => {
        for (const field in it) {
            try {
                if (it[field].toLocaleLowerCase().includes(searchText)) {
                    return true;
                }
            }
            catch (e) {

            }
        }
        return false;
    });

    console.log(filtered);
    return filtered;
  }
}