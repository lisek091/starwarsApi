import { SwapiDispatchTypes,Hero } from "./dataTypes"

export interface DefaultState {
    loading:boolean,
    hero:Hero
}
export const defaultState:DefaultState ={
    hero:{}as Hero,
    loading:false
}

export const swapiReducer = (state:DefaultState=defaultState,action:SwapiDispatchTypes) => {
    switch(action.type) {
        case 'SWAPI_SUCCES':
            return {
                ...state,
                loading:false,
                hero:action.payload
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
