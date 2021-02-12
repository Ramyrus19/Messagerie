import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NontrouveComponent } from './nontrouve.component';

describe('NontrouveComponent', () => {
  let component: NontrouveComponent;
  let fixture: ComponentFixture<NontrouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NontrouveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NontrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
