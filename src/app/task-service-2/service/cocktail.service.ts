import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../model/cocktail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private http = inject(HttpClient);

  constructor() { 
    
  }


  getCocktails(): Observable<Cocktail[]> {

    return this.http.get<Cocktail[]>("assets/cocktails.json");

  }

}
