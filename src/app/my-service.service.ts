import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  mymessage(): Observable<string> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next("hello i am observable service");
      observer.complete();
      }, 2000);
    });
  }
}