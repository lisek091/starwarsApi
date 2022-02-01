export type Hero = {
    name :string,
    height: number,
    mass:number,
    hair_color:string,
    skin_color:string,
    eye_color:string,
    birth_year:string,
    homeworld:string,
    films:[string],
    species:[string],
    vehicles:[string],
    starships:[string],
    url:string
}
export type Planet = {
    name: string, 
    rotation_period: number, 
    orbital_period: number, 
    diameter: number, 
    climate: string, 
    gravity: string, 
    terrain: String, 
    surface_water: number, 
    population: number, 
    residents: [string], 
    films: [string], 
    url: string
}
export interface people {
    count:number|null,
    next:string | null,
    previous: string | null,
    results : [Hero]
}
export const SWAPI_LOADING = "SWAPI_LOADING"
export const SWAPI_SUCCES = "SWAPI_SUCCES"
export const SWAPI_SUCCES_PLANET = "SWAPI_SUCCES_PLANET"
export const SWAPI_FAIL = "SWAPI_FAIL"

export interface SwapiSuccesPlanet {
    type:typeof SWAPI_SUCCES_PLANET
    payload:Planet
}

export interface SwapiSucces {
    type:typeof SWAPI_SUCCES
    payload:people
}
export interface SwapibFail {
    type:typeof SWAPI_FAIL
    payload:string
}

export interface SwapiLoading {
    type:typeof SWAPI_LOADING
}

export type SwapiDispatchTypes = SwapiLoading | SwapiSucces | SwapibFail

export type SwapiDispatchPlanetTypes = SwapiLoading | SwapiSuccesPlanet | SwapibFail