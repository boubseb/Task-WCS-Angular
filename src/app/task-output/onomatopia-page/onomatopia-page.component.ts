import { Component } from '@angular/core';
import { CreateOnomatopiaComponentComponent } from '../create-onomatopia-component/create-onomatopia-component.component';
@Component({
  selector: 'app-onomatopia-page',
  standalone: true,
  imports: [CreateOnomatopiaComponentComponent],
  templateUrl: './onomatopia-page.component.html',
  styleUrl: './onomatopia-page.component.scss'
})
export class OnomatopiaPageComponent {

  onomatopoeiaList: string[] = ['OOOH', 'ahhhhh'];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }

}
