import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnUsuarioComponent } from './un-usuario.component';

describe('UnUsuarioComponent', () => {
  let component: UnUsuarioComponent;
  let fixture: ComponentFixture<UnUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
