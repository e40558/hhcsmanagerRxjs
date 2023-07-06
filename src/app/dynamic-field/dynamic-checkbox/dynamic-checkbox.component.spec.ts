import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckboxComponent } from './dynamic-checkbox.component';

describe('DynamicCheckboxComponent', () => {
  let component: DynamicCheckboxComponent;
  let fixture: ComponentFixture<DynamicCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCheckboxComponent]
    });
    fixture = TestBed.createComponent(DynamicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
