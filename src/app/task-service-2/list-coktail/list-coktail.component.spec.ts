import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoktailComponent } from './list-coktail.component';

describe('ListCoktailComponent', () => {
  let component: ListCoktailComponent;
  let fixture: ComponentFixture<ListCoktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCoktailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCoktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
