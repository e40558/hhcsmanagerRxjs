import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { HomeComponent } from './home/home.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    HomeComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,
    DynamicFormControlComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DemoModule { }
