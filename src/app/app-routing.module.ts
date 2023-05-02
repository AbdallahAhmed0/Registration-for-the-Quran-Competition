import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Register', pathMatch: 'full' },
  {
    path:"Register",
    loadChildren:()=>import('./Registeration/registeration.module').then(l => l.RegisterationModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
