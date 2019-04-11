import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTablonComponent } from './usuario-tablon.component';

describe('UsuarioTablonComponent', () => {
  let component: UsuarioTablonComponent;
  let fixture: ComponentFixture<UsuarioTablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
