import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KitModule } from './kit/kit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
