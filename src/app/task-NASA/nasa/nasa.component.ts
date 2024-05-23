import { Component, inject } from '@angular/core';
import { NasaServiceService } from '../nasa-service.service';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.scss'
})
export class NasaComponent {
  imgOfTheDay?:string;


  NasaService=inject(NasaServiceService)



  ngOnInit(): void {

    this.NasaService.getImageOfTheDay().subscribe(object => {

      this.imgOfTheDay = object.url;

    });


  }
}
