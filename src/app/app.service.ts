import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Categories, Joke } from './app';

import { environment } from '../environments/environment';

const { apiUrl } = environment;

@Injectable()
export class AppService {
  categoriesUrl = `${apiUrl}categories`;
  randomJokeByCategoryUrl = `${apiUrl}random`;

  constructor(
    private http: HttpClient) {}

  getCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.categoriesUrl);
  }

  getRandomJokeByCategory(category: string): Observable<Joke> {
    const options = { params: new HttpParams().set('category', category)};

    return this.http.get<Joke>(this.randomJokeByCategoryUrl, options);
  }
}
