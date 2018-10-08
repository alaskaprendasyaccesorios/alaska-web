import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformcionComponent } from './informcion.component';

describe('InformcionComponent', () => {
  let component: InformcionComponent;
  let fixture: ComponentFixture<InformcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
