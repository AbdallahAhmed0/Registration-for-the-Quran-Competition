import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { RegisterStateComponent } from './Components/register-state/register-state.component';

const routes: Routes = [
  {path:"",component:RegisterationComponent},
  {path:"state",component:RegisterStateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
