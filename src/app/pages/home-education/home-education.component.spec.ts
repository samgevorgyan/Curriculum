import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEducationComponent } from './home-education.component';

describe('HomeEducationComponent', () => {
  let component: HomeEducationComponent;
  let fixture: ComponentFixture<HomeEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
