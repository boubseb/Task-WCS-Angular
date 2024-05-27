import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlockPageComponent } from './task-component/block-page/block-page.component';
import { UserProfileComponent } from './task-binding/user-profile/user-profile.component';
import { MenuComponent } from './task-templates-driven-froms/menu/menu.component';
import { SignUpComponent } from './task-templates-driven-froms/sign-up/sign-up.component';
import { UserProfilComponent } from './task-templates-driven-froms/user-profil/user-profil.component';
import { DeveloperComponent } from './task-input/developer/developer.component';
import { OnomatopiaPageComponent } from './task-output/onomatopia-page/onomatopia-page.component';
import { RacineComponent } from './task-user-interaction/racine/racine.component';
import { CocktailListComponent } from './task-service/cocktail-list/cocktail-list.component';
import { DirectivePageComponent } from './task-directives/directive-page/directive-page.component';
import { ListCoktailComponent } from './task-service-2/list-coktail/list-coktail.component';
import { NasaComponent } from './task-NASA/nasa/nasa.component';
import { PokedexPageComponent } from './task-pokedex/pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './task-pokedex/pages/create-pokemon/create-pokemon.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'task-component', component: BlockPageComponent },
{ path: 'task-binding', component: UserProfileComponent },
{ path: 'task-directives', component: DirectivePageComponent },
{ path: 'task-router', component: UserProfileComponent },
{ path: 'task-templates-driven-forms', component: MenuComponent,children: [
    {path: '',component: UserProfilComponent},
    {path: 'user',component: UserProfilComponent},
    {path: 'signup',component: SignUpComponent},
    ]
},
{ path: 'task-input', component: DeveloperComponent },
{ path: 'task-output', component: OnomatopiaPageComponent },
{ path: 'task-user-interation', component: RacineComponent },
{ path: 'task-service', component: ListCoktailComponent },
{ path: 'task-service-2', component: CocktailListComponent },
{ path: 'task-NASA', component: NasaComponent },
{ path: 'task-pokedex', component: PokedexPageComponent },
{ path: 'task-pokedex/create', component: CreatePokemonComponent },

  
   ];
