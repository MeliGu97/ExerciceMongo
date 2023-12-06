import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  getEtudiants() {
    return this.http.get('http://localhost:3000/api/etudiants');
  }
}

