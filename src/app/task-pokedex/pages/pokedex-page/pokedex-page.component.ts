import { Component, inject } from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../models/pokemon';
import { PokedexService } from '../../shared/pokedex.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent,PokemonDetailComponent,RouterLink],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss'
})
export class PokedexPageComponent {

  pokemonService=inject(PokedexService)

  pokemons:Pokemon[]=[]


  pokemonSelected?:Pokemon

  ngOnInit(): void{
    this.pokemonService.getPokemons().subscribe(pokemons=>this.pokemons=pokemons)
    console.log(this.pokemons)
  }


  onReceivePokemonSelected(event: Pokemon): void {
    this.pokemonSelected=event;
  }

}
