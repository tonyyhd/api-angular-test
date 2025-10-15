import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolio } from './port-folio';

describe('PortFolio', () => {
  let component: PortFolio;
  let fixture: ComponentFixture<PortFolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortFolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortFolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
