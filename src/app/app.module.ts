import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterationModule } from './Registeration/registeration.module';
import { FooterComponent } from './dashboard/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
