import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersImageComponent } from './consumers-image.component';

describe('ConsumersImageComponent', () => {
  let component: ConsumersImageComponent;
  let fixture: ComponentFixture<ConsumersImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumersImageComponent]
    });
    fixture = TestBed.createComponent(ConsumersImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
