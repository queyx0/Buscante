import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscarLivros(valor: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valor);
    return this.http.get<LivrosResultado>(this.API, {
      params,
    }).pipe(tap(res => console.log('Fluxo do tap',res)),
    map(res => res.items),
    // tap(res => console.log('Fluxo após map', res))
    )
  }
}
