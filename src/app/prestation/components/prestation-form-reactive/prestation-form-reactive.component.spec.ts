import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationFormReactiveComponent } from './prestation-form-reactive.component';

describe('PrestationFormReactiveComponent', () => {
  let component: PrestationFormReactiveComponent;
  let fixture: ComponentFixture<PrestationFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
