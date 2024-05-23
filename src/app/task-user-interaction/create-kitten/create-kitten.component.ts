import { Component, inject } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { FormsModule } from '@angular/forms';
import { KittenService } from '../service/kitten.service';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {

  private kittenService:KittenService=inject(KittenService)
  kitten:Omit<Kitten,'id'>={
    name:"",
    breed:"",
    dateOfBirth:new Date(),
    image:""
  }

  onSubmit(){
    this.kittenService.addKitten(this.kitten)
  }

}
