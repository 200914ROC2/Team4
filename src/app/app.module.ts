import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetsComponent } from './sets/sets.component';

import { ContactsComponent } from './contacts/contacts.component';
import { AlertComponent } from './_components';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemeModule } from './theme/theme.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseComponent,
    Error404Component,
    NavbarComponent,
    SetsComponent,
    ProfileComponent,
    ContactsComponent,
    CalendarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
