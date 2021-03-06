import { SwapiDispatchTypes,people } from "./dataTypes"

export interface DefaultState {
    people:people,
    loading:boolean
}
export const defaultState:DefaultState ={
    people:{} as people,
    loading:false
}

export const swapiReducer = (state:DefaultState=defaultState,action:SwapiDispatchTypes) => {
    switch(action.type) {
        case 'SWAPI_SUCCES':
            return {
                ...state,
                loading:false,
                people:action.payload
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
