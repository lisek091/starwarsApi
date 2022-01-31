export interface Hero {
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
export const SWAPI_LOADING = "SWAPI_LOADING"
export const SWAPI_SUCCES = "SWAPI_SUCCES"
export const SWAPI_FAIL = "SWAPI_FAIL"


export interface SwapiSucces {
    type:typeof SWAPI_SUCCES
    payload:Hero
}
export interface SwapibFail {
    type:typeof SWAPI_FAIL
    payload:string
}

export interface SwapiLoading {
    type:typeof SWAPI_LOADING
}

export type SwapiDispatchTypes = SwapiLoading | SwapiSucces | SwapibFail