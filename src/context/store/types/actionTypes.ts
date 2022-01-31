
export const SWAPI_LOADING = "SWAPI_LOADING"
export const SWAPI_SUCCES = "SWAPI_SUCCES"
export const SWAPI_FAIL = "SWAPI_FAIL"

export interface SwapiHeroLoading {
    type: typeof SWAPI_LOADING
}
export interface SwapiHeroFail {
    type: typeof SWAPI_FAIL,
    payload: string
}
export interface SwapiHeroSucces {
    type: typeof SWAPI_SUCCES,
}

export type SwapiDispatchTypes = SwapiHeroFail | SwapiHeroLoading | SwapiHeroSucces