import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../models/pokemon';
import { PokedexService } from '../../shared/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.scss'
})
export class CreatePokemonComponent {

  pokemonService=inject(PokedexService)
  router=inject(Router)

  newPokemon:Pokemon={name:"",imageUrl:"",description:""}

  onSubmit(){

    this.pokemonService.addPokemon(this.newPokemon)
    this.router.navigate(['task-pokedex'])
  }

}
