import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudpicviewerComponent } from './cloudpicviewer.component';

describe('CloudpicviewerComponent', () => {
  let component: CloudpicviewerComponent;
  let fixture: ComponentFixture<CloudpicviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudpicviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudpicviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
