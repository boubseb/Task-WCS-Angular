import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  private http = inject(HttpClient);

  constructor() { }


  getImageOfTheDay():Observable<any>{
    return this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=3f9q5XGjlFbihtTt6yg4D9hp4myJYu8AinKuEJsH"); //yes you can have my apiKey 
  }
}
