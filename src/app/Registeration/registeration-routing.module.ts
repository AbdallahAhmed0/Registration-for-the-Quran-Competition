import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './Components/registeration/registeration.component';

const routes: Routes = [
  {path:"",component:RegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
