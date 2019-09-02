import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodelversionComponent } from './viewmodelversion.component';

describe('ViewmodelversionComponent', () => {
  let component: ViewmodelversionComponent;
  let fixture: ComponentFixture<ViewmodelversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodelversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodelversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
