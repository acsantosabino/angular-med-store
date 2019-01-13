import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdutoGradeComponent } from './item-produto-grade.component';

describe('ItemProdutoGradeComponent', () => {
  let component: ItemProdutoGradeComponent;
  let fixture: ComponentFixture<ItemProdutoGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProdutoGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProdutoGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
