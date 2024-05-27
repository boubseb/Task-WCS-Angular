import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  @Input()
  pokemons:Pokemon[]=[]




  @Output()
  sendPokemonSelectedToPage: EventEmitter<Pokemon> = new EventEmitter();

  onClickPokemon(pokemon:Pokemon): void {
    this.sendPokemonSelectedToPage.emit(pokemon);
  }


}
