import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegralService {

  constructor(private _http: HttpClient) { }
  save(body: any):Observable<any>{
    return this._http.post<any>('http://127.0.0.1:8000/api/integral/',body);  
  }   


}
