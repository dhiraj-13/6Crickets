// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedCountdownService {

//   constructor() { }
// }


// shared-countdown.service.ts (Inside library or shared folder)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedCountdownService {
  public secondsLeft$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    interval(1000)
      .pipe(
        switchMap(() => this.http.get<{ secondsLeft: number }>('http://localhost:3000/countdown'))
      )
      .subscribe((response) => {
        console.log('API response:', response);
        this.secondsLeft$.next(response.secondsLeft);
      });
  }
}

