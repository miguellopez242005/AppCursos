import { NgModule,provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Formulario } from './components/formulario/formulario';
import { Listar } from './components/listar/listar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [App, Formulario, Listar],
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(),provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule { }
