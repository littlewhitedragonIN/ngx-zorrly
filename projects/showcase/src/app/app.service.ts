import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, timer} from "rxjs";
import {concatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  options(): Observable<any> {
    return timer(5000).pipe(concatMap(() => this.http.get('/assets/options.json')));
  }

  model(): Observable<any> {
    return timer(100).pipe(concatMap(() => this.http.get('/assets/model.json')));
  }

}
