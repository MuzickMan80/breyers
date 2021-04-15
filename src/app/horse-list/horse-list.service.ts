import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Breyer {
  name: string;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class HorseListService {

  constructor(private http: HttpClient) {}

  getField(entry, field): any {
      try{
        return entry[`gsx$${field}`]['$t'];
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

              obj.name = entry['gsx$modelname']['$t']
              obj.number = entry['gsx$modelnumber']['$t']            
              /*for (const x in entry) {

                if (x.includes('gsx$') && entry[x].$t) {
                  obj[x.split('$')[1]] = entry[x]['$t'];
                }
              }*/
              returnArray.push(obj);
            });
          }
          return returnArray;
        })
      );
  }
}

