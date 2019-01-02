import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVerticalComponent } from './lista-vertical.component';

describe('ListaVerticalComponent', () => {
  let component: ListaVerticalComponent;
  let fixture: ComponentFixture<ListaVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
