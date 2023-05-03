import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStateComponent } from './Components/register-state/register-state.component';


@NgModule({
  declarations: [
    RegisterationComponent,
    RegisterStateComponent
  ],
  imports: [
    CommonModule,
    RegisterationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterationModule { }
