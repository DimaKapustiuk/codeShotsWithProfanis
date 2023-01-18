import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
 
  public getAsyncData(): Observable<{ title: string, descr: string }[]> {
    return of([
      { title: "Test 1", descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quibusdam similique? Error illum atque numquam ex sint minima quis saepe voluptate soluta ducimus quas, vero modi similique, quam, aliquid aliquam! ' },
      { title: "Test 2", descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quibusdam similique? Error illum atque numquam ex sint minima quis saepe voluptate soluta ducimus quas, vero modi similique, quam, aliquid aliquam! ' },
      { title: "Test 3", descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quibusdam similique? Error illum atque numquam ex sint minima quis saepe voluptate soluta ducimus quas, vero modi similique, quam, aliquid aliquam! ' }
    ]);
  }
}

