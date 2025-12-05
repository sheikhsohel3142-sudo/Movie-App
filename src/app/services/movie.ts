import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movie {

apiUrl = 'https://www.omdbapi.com/?apikey=4fdbf800';

constructor(private http: HttpClient) {}

getMovieByTitle(title: string): Observable<any> {
  return this.http.get(`${this.apiUrl}&t=${title}`);
}

getMovieList(title: string): Observable<any> {
  return this.http.get(`${this.apiUrl}&s=${title}`);
}



  
}
