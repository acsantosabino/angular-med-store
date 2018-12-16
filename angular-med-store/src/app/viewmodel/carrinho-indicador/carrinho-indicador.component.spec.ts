import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoIndicadorComponent } from './carrinho-indicador.component';

describe('CarrinhoIndicadorComponent', () => {
  let component: CarrinhoIndicadorComponent;
  let fixture: ComponentFixture<CarrinhoIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
