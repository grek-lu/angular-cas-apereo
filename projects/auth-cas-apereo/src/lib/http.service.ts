import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  doGetUrlXML(url: string): Observable<any> {
    //todo try json
    return this.http.get(url, { responseType: 'text' })
  }
  
  doGet(path: string): Observable<any> {
    return this.http.get(path)
  }

}
