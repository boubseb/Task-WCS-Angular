import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {

  developer: Developer = {
    lastName: 'messi',
    firstName: 'leo',
    age: 35,
    bio: 'GOAT',
    gender: 'M',
    skills: [
      { name: 'front', logo: 'url_logo', site: 'url_site' },
      { name: 'back', logo: 'url_logo2', site: 'url_site2' },
    ],
  };

}
