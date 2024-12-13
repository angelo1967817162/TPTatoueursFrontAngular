import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Client} from '../models/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/clients';
  constructor(private http: HttpClient, private auth: AuthService) {}
//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getClients():Observable<Client[]>{
    let clients = this.http.get<Client[]>(this.apiUrl);
    return clients;
  }
  addClient(client:Client): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(client), {headers:this.auth.headers});
  }
  findById(id:number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }
  update(id:number, client:Client): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(client), {headers:this.auth.headers})
  }
  delete(id:number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers:this.auth.headers})
  }
}
