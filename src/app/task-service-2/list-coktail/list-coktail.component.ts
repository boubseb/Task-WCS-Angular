import { Component, inject } from '@angular/core';
import { CocktailService } from '../service/cocktail.service';
import { Cocktail } from '../model/cocktail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-coktail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-coktail.component.html',
  styleUrl: './list-coktail.component.scss'
})
export class ListCoktailComponent {

  cocktailService=inject(CocktailService)

  cocktails: Cocktail[] = [];

  ngOnInit(): void {

    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {

      this.cocktails = cocktailsFromJsonFile;

    });


  }

}
