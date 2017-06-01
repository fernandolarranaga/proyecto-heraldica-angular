import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborateComponent } from './colaborate.component';

describe('ColaborateComponent', () => {
  let component: ColaborateComponent;
  let fixture: ComponentFixture<ColaborateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaborateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
