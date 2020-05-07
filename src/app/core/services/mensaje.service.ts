import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Formulario } from '../interfaces/formulario.interface';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }


  sendMessage(body: Formulario): Observable<any> {
    return this.http.post<any>(environment.envioMensaje, JSON.stringify(body), httpOptions).pipe();
  }
}
