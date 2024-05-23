import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-block-page',
  standalone: true,
  imports: [BlockComponent],
  templateUrl: './block-page.component.html',
  styleUrl: './block-page.component.scss'
})
export class BlockPageComponent {
  blockCount: number[] = [0, 1, 2, 3];
}
