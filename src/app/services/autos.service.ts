
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http:HttpClient) { }
  private API_AUTO="http://localhost:3000/auto"

  getAutosTabla():Observable <any>{

    return this.http.get(this.API_AUTO);  
  
  }
  getAutosTablaId(id:any): Observable<any>
{
  return this.http.get(`${this.API_AUTO}/${id}`);
}
postAutosTabla(item:any): Observable<any>{
  return this.http.post(this.API_AUTO,item);
}
putAutosTabla(item:any): Observable<any>{
  return this.http.put(`${this.API_AUTO}/${item.id}`,item);
}
deleteAutosTabla(id:any): Observable<any>{
  return this.http.delete(`${this.API_AUTO}/${id}`);

}
}
