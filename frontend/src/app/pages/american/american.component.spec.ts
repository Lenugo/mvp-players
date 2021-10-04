import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanComponent } from './american.component';

describe('AmericanComponent', () => {
  let component: AmericanComponent;
  let fixture: ComponentFixture<AmericanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
