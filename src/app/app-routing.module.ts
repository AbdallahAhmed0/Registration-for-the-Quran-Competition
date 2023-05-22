import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {
    path:"Register",
    loadChildren:()=>import('./Registeration/registeration.module').then(l => l.RegisterationModule)
  },
  { path: '**', redirectTo: 'home' } // Wildcard route for 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // Use PreloadAllModules strategy
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
