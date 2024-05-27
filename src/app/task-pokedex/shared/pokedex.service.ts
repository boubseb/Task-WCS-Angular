import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from './pokemons-mock';



@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons:Pokemon[]=POKEMONS





  constructor() { 
  
  }


  getPokemons(): Observable<Pokemon[]> {

    return of(this.pokemons)

  }

  addPokemon(pokemon: Pokemon):void{
    this.pokemons.push(pokemon)

  }


}
