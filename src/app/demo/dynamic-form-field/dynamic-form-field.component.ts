import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/controlBase-model';

@Component({
  selector: 'dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent {
  @Input() control!: ControlBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }


}
