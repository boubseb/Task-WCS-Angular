import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-page.component.html',
  styleUrl: './directive-page.component.scss'
})
export class DirectivePageComponent {
  isAdmin:boolean=false
}
