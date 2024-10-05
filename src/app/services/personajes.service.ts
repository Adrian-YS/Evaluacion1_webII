import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private API_URL = 'https://jritsqmet.github.io/web-api/crash.json'; // Asegúrate de que esta es la URL correcta

  constructor(private http: HttpClient) {}

  getPersonaje(): Observable<any> {
    return this.http.get(this.API_URL); // Realiza la llamada a la API
  }
}
