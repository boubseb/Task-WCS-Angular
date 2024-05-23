import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  coktails:Cocktail[];



  constructor() { 
    this.coktails=[{name:'mojito parisien',price:15,image:'https://'},{name:'virgin mojito',price:10,image:'https://'},{name:'mojito',price:12,image:'https://'}]
  }


  getCocktails():Cocktail[]{
    return this.coktails

  }
}
