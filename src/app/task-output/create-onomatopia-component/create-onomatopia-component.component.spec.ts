import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopiaComponentComponent } from './create-onomatopia-component.component';

describe('CreateOnomatopiaComponentComponent', () => {
  let component: CreateOnomatopiaComponentComponent;
  let fixture: ComponentFixture<CreateOnomatopiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnomatopiaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
