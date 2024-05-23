import { Component, inject} from '@angular/core';
import { KittenService } from '../service/kitten.service';
import { Observable } from 'rxjs';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {

  isDisplay=false

  private kittenService=inject(KittenService)
  usertKittens$: Observable<Kitten[]>=this.kittenService.userKittens$;

  showInfoIndex: number | null = null;

  showInfo() {
    this.isDisplay=!this.isDisplay
  }

  
}





 