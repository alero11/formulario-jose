import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formulario } from '../interfaces/formulario.interface';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  insertClient(formulario: Formulario) {
    const body = JSON.stringify(formulario);
    return this.http.post(`${environment.clientesUrl}`, body, httpOptions);
  }

  getClients() {
    return this.http.get<Array<Formulario>>(`${environment.clientesUrl}`);
  }
}
