import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopiaPageComponent } from './onomatopia-page.component';

describe('OnomatopiaPageComponent', () => {
  let component: OnomatopiaPageComponent;
  let fixture: ComponentFixture<OnomatopiaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnomatopiaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnomatopiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
