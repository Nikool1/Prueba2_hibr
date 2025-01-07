import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MostrarCitaComponent } from './mostrar-cita.component';

describe('MostrarCitaComponent', () => {
  let component: MostrarCitaComponent;
  let fixture: ComponentFixture<MostrarCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MostrarCitaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
