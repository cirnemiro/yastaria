import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTareasComponent } from './nueva-tareas.component';

describe('NuevaTareasComponent', () => {
  let component: NuevaTareasComponent;
  let fixture: ComponentFixture<NuevaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
