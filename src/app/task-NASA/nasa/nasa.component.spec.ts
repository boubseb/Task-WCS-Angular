import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaServiceService } from '../nasa-service.service';
import { NasaComponent } from './nasa.component';
import { HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';

describe('NasaComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [HttpClientModule, NasaComponent],

    }).compileComponents();

  });


  it('should create the app', () => {

    const fixture = TestBed.createComponent(NasaComponent);

    const app = fixture.componentInstance;

    expect(app).toBeTruthy();

  });


  it('service should be created', () => {

    const service: NasaServiceService = TestBed.inject(NasaServiceService);

    expect(service).toBeTruthy();

  });


  it('service should have a "getImageOfTheDay" method which returns an Observable<string> object', () => {

    const service: NasaServiceService = TestBed.inject(NasaServiceService);

    service.getImageOfTheDay().subscribe((param_img: any) => {

      expect(param_img).toBeTruthy();

    });

  });


  it('should create a NasaComponent instance', () => {

    const fixture = TestBed.createComponent(NasaComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();

  });


  it('component should display an image', () => {

    const fixture = TestBed.createComponent(NasaComponent);

    const service: NasaServiceService = TestBed.inject(NasaServiceService);

    const mock: Observable<any> = of({

      url: 'https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg',

    });


    spyOn(service, 'getImageOfTheDay').and.returnValue(mock);


    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const content = compiled.querySelector('img').src;

    expect(content).toContain(fixture.componentInstance.imgOfTheDay);

  });

});
