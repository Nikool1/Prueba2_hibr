import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarListaComponent } from './agregar-lista.component';

describe('AgregarListaComponent', () => {
  let component: AgregarListaComponent;
  let fixture: ComponentFixture<AgregarListaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AgregarListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
