import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Breyer {
  modelname: string = "";
  modelnumber: number = 0;
  photo: string = "";
  photo2: string = "";
  moldcreated: string = "";
  moldName: string = "";
  moldNumber: string = "";
  notes: string = "";
  ourbarnname: string = "";
  realhorse: string = "";
  sculptor: string = "";
  series: string = "";
  set: string = "";
  wheredidwegetit: string = "";
  yearobtained: string = "";
  yearsProduced: string = "";
  link: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class HorseListService {

  constructor(private http: HttpClient) {}

  getField(entry, field: string, headerRow: string): any {
      const columns = headerRow.split(',').map((col: string) => col.split(' ').join('').toLowerCase());

      try{
        const index = columns.indexOf(field.toLowerCase());
        return entry.split(',')[index];
      } catch {
        return 'missing';
      }
  }

  public setFilter(filter: string) {
    
  }

  public getHorses(): Observable<Breyer[]> {
    const url = 
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_nn8F7_ZS8671sQ0nLCt-BniPTQ3RKHZFcJ2KaAyaD-OYZtRbMfEggX0Lb9qE7jw-3pDFI53_yYiA/pub?output=csv'

    return this.http.get(url, {responseType:'text'})
      .pipe(
        map((res: string) => {

          const returnArray: Array<Breyer> = [];

          if (res && res.length > 0) {
            const rows = res.split('\n');
            const headerRow = rows[0];
            
            rows.slice(1).forEach(entry => {

              const obj : Breyer = new Breyer;

              for (const x in obj) {
                obj[x] = this.getField(entry, x, headerRow);
              }
              returnArray.push(obj);
            });
          }
          return returnArray;
        })
      );
  }
}

