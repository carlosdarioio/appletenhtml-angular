import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Usersmodel } from '../interfaces/user.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'http://localhost:8080/backendphp'; //name/united
  /*get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }*/
  constructor(private http: HttpClient) {}
  //getPaisPorAlpha
  getUsers(): Observable<Usersmodel[]> {
    const url = `${this.apiUrl}/?api=users`;
    return this.http.get<Usersmodel[]>(url);
  }

  getHeroePorId(id: string): Observable<Usersmodel> {
    return this.http.get<Usersmodel>(
      `${this.apiUrl}/?api=usersgetbyid&id=${id}`
    );
  }

  agregarHeroe(heroe: Usersmodel): Observable<Usersmodel> {
    return this.http.post<Usersmodel>(`${this.apiUrl}/?api=usernew`, heroe);
  }
}
