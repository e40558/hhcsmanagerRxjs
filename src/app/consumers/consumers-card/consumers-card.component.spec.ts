import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersCardComponent } from './consumers-card.component';

describe('ConsumersCardComponent', () => {
  let component: ConsumersCardComponent;
  let fixture: ComponentFixture<ConsumersCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumersCardComponent]
    });
    fixture = TestBed.createComponent(ConsumersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
