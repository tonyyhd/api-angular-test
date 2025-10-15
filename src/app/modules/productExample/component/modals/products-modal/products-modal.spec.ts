import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModal } from './products-modal';

describe('ProductsModal', () => {
  let component: ProductsModal;
  let fixture: ComponentFixture<ProductsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
