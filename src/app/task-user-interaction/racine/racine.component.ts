import { Component } from '@angular/core';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { ListKittenComponent } from '../list-kitten/list-kitten.component';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
@Component({
  selector: 'app-racine',
  standalone: true,
  imports: [CreateKittenComponent,ListKittenComponent,UserKittenComponent],
  templateUrl: './racine.component.html',
  styleUrl: './racine.component.scss'
})
export class RacineComponent {

}
