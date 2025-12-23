import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });
  }

  // Demandes
  createDemande(demande: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/demandes`, demande);
  }

  getAllDemandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/demandes`, {
      headers: this.getHeaders(),
    });
  }

  getDemandesEnAttente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/demandes/en-attente`, {
      headers: this.getHeaders(),
    });
  }

  getMesDemandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/demandes/mes-demandes`, {
      headers: this.getHeaders(),
    });
  }

  getStatistiques(): Observable<any> {
    return this.http.get(`${this.apiUrl}/demandes/statistiques`, {
      headers: this.getHeaders(),
    });
  }

  prendreEnChargeDemande(demandeId: number): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/demandes/${demandeId}/prendre-en-charge`,
      {},
      { headers: this.getHeaders() }
    );
  }

  terminerDemande(demandeId: number): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/demandes/${demandeId}/terminer`,
      {},
      { headers: this.getHeaders() }
    );
  }

  // Users
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, {
      headers: this.getHeaders(),
    });
  }

  toggleDisponibilite(userId: number): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/users/${userId}/toggle-disponibilite`,
      {},
      { headers: this.getHeaders() }
    );
  }
}
