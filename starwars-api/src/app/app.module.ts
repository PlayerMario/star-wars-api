import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmListComponent } from './components/film/film-list.component';
import { PortadaComponent } from './components/portada/portada.component';
import { PeopleComponent } from './components/people/people.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsDialogComponent } from './dialogs/starships-dialog/starships-dialog.component';
import { FilmDialogComponent } from './dialogs/film-dialog/film-dialog.component';
import { VehicleDialogComponent } from './dialogs/vehicle-dialog/vehicle-dialog.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { PlanetDialogComponent } from './dialogs/planet-dialog/planet-dialog.component';
import { SpecieDialogComponent } from './dialogs/specie-dialog/specie-dialog.component';
import { PeopleDialogComponent } from './dialogs/people-dialog/people-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    PortadaComponent,
    PeopleComponent,
    StarshipsComponent,
    PagenotfoundComponent,
    VehiclesComponent,
    StarshipsDialogComponent,
    FilmDialogComponent,
    VehicleDialogComponent,
    PlanetsComponent,
    SpeciesComponent,
    PlanetDialogComponent,
    SpecieDialogComponent,
    PeopleDialogComponent

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
