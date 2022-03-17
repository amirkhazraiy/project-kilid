import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './moduls/pages/main/main.component';
import {BackEndService} from './moduls/services/back-end.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,

    ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
