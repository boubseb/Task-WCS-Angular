import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {


  isDisplayAge:boolean=false
  user1:User = {

    name : 'Doe',
  
    firstName : 'John',
  
    age : 25,
  
    quote : 'lol',
  
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  
  };

}
