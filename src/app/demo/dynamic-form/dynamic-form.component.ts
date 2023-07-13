import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/controlBase-model';
import { ControlService } from '../control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers:[ControlService]
})
export class DynamicFormComponent {
  @Input() controls: ControlBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private controlService: ControlService) {}

  ngOnInit() {
    this.form = this.controlService.toFormGroup(this.controls as ControlBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
