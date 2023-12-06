import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  getEtudiants() {
    return this.http.get('/api/etudiants');
  }

  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>('api/etudiants', etudiant);
  }
}

