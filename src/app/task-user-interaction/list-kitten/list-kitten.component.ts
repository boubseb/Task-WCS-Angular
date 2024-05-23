import { Component,inject } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';
import { KittenService } from '../service/kitten.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss'
})
export class ListKittenComponent {

  private kittenService=inject(KittenService)
  kittens$: Observable<Kitten[]>=this.kittenService.kittens$;


ngOnInit(){
 
}

adopteKitten(kitten:Kitten){
this.kittenService.AdoptKitten(kitten)
}
  

}
