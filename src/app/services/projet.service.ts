import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Projet} from '../models/projet.model';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/projets';
  constructor(private http: HttpClient, private auth: AuthService) {}
//fonction getTatoueur : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getProjets():Observable<Projet[]>{
    let projets = this.http.get<Projet[]>(this.apiUrl);
    return projets;
  }
  addProjets(projet:Projet): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(projet), {headers:this.auth.headers});
  }
  findById(id:number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }
  update(id:number, projet:Projet): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(projet), {headers:this.auth.headers})
  }
  delete(id:number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers:this.auth.headers})
  }
}
