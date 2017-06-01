import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateZoneComponent } from './private-zone.component';

describe('PrivateZoneComponent', () => {
  let component: PrivateZoneComponent;
  let fixture: ComponentFixture<PrivateZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
