import { Component, inject } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { Cocktail } from '../model/cocktail.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  cocktailService=inject(CocktailService)

  cocktails:Cocktail[]=this.cocktailService.getCocktails()

}
