import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importamos el ReactiveFormsModule para trabajar con la data
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    // lo agreagamos alos imports
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
