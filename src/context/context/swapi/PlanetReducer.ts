import { Planet,SwapiDispatchPlanetTypes } from "./dataTypes"

export interface DefaultPlanetState {
    planet:Planet,
    loading:boolean
}
export const defaultPlanetState:DefaultPlanetState ={
    planet:{} as Planet,
    loading:false
}

export const planetReducer = (state:DefaultPlanetState=defaultPlanetState,action:SwapiDispatchPlanetTypes) => {
    switch(action.type) {
        case 'SWAPI_SUCCES_PLANET':
            return {
                ...state,
                loading:false,
                planet:action.payload
            }
        case 'SWAPI_FAIL':
            return {
                ...state,
                loading:false,
            }
        case 'SWAPI_LOADING':
            return {
                ...state,
                loading:true
            }
    }
}