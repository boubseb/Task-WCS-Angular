import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPageComponent } from './block-page.component';

describe('BlockPageComponent', () => {
  let component: BlockPageComponent;
  let fixture: ComponentFixture<BlockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
