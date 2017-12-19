import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdSidenavModule,
    CoreModule//只在根下面导入一次就好
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
