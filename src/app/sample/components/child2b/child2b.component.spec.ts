import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2bComponent } from './child2b.component';

describe('Child2bComponent', () => {
  let component: Child2bComponent;
  let fixture: ComponentFixture<Child2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
