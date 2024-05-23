import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-onomatopia-component.component.html',
  styleUrl: './create-onomatopia-component.component.scss'
})
export class CreateOnomatopiaComponentComponent {
  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
