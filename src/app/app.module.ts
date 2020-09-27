import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InfoPageComponent } from './info-page/info-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
