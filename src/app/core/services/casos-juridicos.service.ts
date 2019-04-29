import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CasosJuridicosService {

  constructor(private http: HttpClient) { }

  getCasosJuridicos(): any {
    return this.http.get<any>(`${environment.casosJuridicosUrl}`);
  }
}
