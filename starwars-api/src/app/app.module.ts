import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortadaComponent } from './components/portada/portada.component';
import { PeopleComponent } from './components/people/people.component';
import { StarshipsComponent } from './components/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    PeopleComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
