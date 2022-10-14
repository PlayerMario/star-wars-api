import { Film } from "./films.interface";
import { People } from "./people.interface";
import { Planet } from "./planets.interface";
import { Specie } from "./species.interface";
import { Starship } from "./starships.interface";
import { Vehicle } from "./vehicles.interface";

export interface StarshipData {
    starshipInfo: Starship
}

export interface FilmData {
    filmInfo: Film
}

export interface PeopleData {
    peopleInfo: People
}

export interface VehicleData {
    vehicleInfo: Vehicle
}

export interface SpecieData {
    specieInfo: Specie
}

export interface PlanetData {
    planetInfo: Planet
}