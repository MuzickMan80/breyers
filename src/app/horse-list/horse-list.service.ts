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
  notes: string = "";
  ourbarnname: string = "";
  realhorse: string = "";
  sculptor: string = "";
  series: string = "";
  set: string = "";
  wheredidwegetit: string = "";
  yearobtained: string = "";
  yearsProduced: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class HorseListService {

  constructor(private http: HttpClient) {}

  getField(entry, field: string): any {
      try{
        return entry[`gsx$${field.toLowerCase()}`]['$t'];
      } catch {
        return 'missing';
      }
  }


  public getHorses(): Observable<Breyer[]> {
    const sheetid = '1qn74m4DNuvNgrFQSBPBrlbgYZCUwNUpTZOAysFi97CY';
    const sheetno = 1;
    const url = 
    `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;
  

    return this.http.get(url)
      .pipe(
        map((res: any) => {
          const data = res.feed.entry;

          const returnArray: Array<Breyer> = [];
          if (data && data.length > 0) {
            data.forEach(entry => {
              const obj : Breyer = new Breyer;
              console.log(entry);

              for (const x in obj) {
                obj[x] = this.getField(entry, x);
              }
              returnArray.push(obj);
            });
          }
          return returnArray;
        })
      );
  }
}

