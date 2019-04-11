import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablonComponent } from './tablon.component';

describe('TablonComponent', () => {
  let component: TablonComponent;
  let fixture: ComponentFixture<TablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
