// src/app/app.module.ts
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { SharedModule }         from './shared/shared.module'; // ← add this

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule            // ← now <app-header> is known here
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
