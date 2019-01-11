import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselProdutosComponent } from './carrossel-produtos.component';

describe('CarrosselProdutosComponent', () => {
  let component: CarrosselProdutosComponent;
  let fixture: ComponentFixture<CarrosselProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
