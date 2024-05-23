import { Injectable } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  
  private nextId = 1;

  private kittens: Kitten[] = [];
  private kittenSubject = new BehaviorSubject<Kitten[]>([]);
  kittens$ = this.kittenSubject.asObservable();  // Expose as an observable

  private userKittens:Kitten[]=[];
  private userKittenSubject=new BehaviorSubject<Kitten[]>([]);
  userKittens$=this.userKittenSubject.asObservable();


  constructor() {


    this.kittens = [
      { id:this.nextId++,
        name: 'Whiskers',
        breed: 'Siamese',
        dateOfBirth: new Date(2015, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
      {  
        id:this.nextId++,
        name: 'lionnel',
        breed: 'European',
        dateOfBirth: new Date(2012, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
      { id:this.nextId++,
        name: 'Whiskers',
        breed: 'Siamese',
        dateOfBirth: new Date(2015, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
      {  
        id:this.nextId++,
        name: 'lionnel',
        breed: 'European',
        dateOfBirth: new Date(2012, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
      { id:this.nextId++,
        name: 'Whiskers',
        breed: 'Siamese',
        dateOfBirth: new Date(2015, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
      {  
        id:this.nextId++,
        name: 'lionnel',
        breed: 'European',
        dateOfBirth: new Date(2012, 6, 20),
        image: 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg'
      },
    ];
    this.kittenSubject.next(this.kittens)

    this.userKittenSubject.next(this.userKittens)
  }

  getKittens(): Kitten[] {
    return this.kittens;
  }

  addKitten(kitten :Omit<Kitten,'id'>): void {
      this.kittens.push({
        id: this.nextId++,
        name:kitten.name,
        breed:kitten.breed,
        dateOfBirth:kitten.dateOfBirth,
        image:kitten.image
      });
      this.kittenSubject.next(this.kittens)
  }



  AdoptKitten(kitten:Kitten): boolean {
    const index = this.kittens.findIndex(k => k.id === kitten.id);
    if (index !== -1) {
      this.kittens.splice(index, 1)
      this.userKittens.push(kitten)
      this.userKittenSubject.next(this.userKittens)
      console.log(this.userKittens)
      return true;
    }
    return false;
  }
}
