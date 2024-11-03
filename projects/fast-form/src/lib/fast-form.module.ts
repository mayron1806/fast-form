import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
  declarations: [FormComponent, InputComponent],
  exports: [FormComponent, InputComponent],
})
export class FastFormModule { }
