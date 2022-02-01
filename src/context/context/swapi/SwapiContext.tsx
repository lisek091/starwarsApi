import { createContext, useReducer } from 'react'
import { Planet, SwapiDispatchTypes, people, SwapiDispatchPlanetTypes } from './dataTypes'
import { swapiReducer, defaultState } from './SwapiReducer'
import { planetReducer, defaultPlanetState } from './PlanetReducer'
type SwapiProps = {
    children: React.ReactNode
}
type PeopleContextType = {
    dispatch: React.Dispatch<SwapiDispatchTypes>,
    people: people,
    loading: boolean,
}
type SwapiPlanetProps = {
    children: React.ReactNode
}
type PlanetContextType = {
    dispatch: React.Dispatch<SwapiDispatchPlanetTypes>,
    planet: Planet,
    loading: boolean,
}


export const SwapiContext = createContext<PeopleContextType>({} as PeopleContextType)
export const PlanetContext = createContext<PlanetContextType>({} as PlanetContextType)

export const SwapiProvider = ({ children }: SwapiProps) => {
    const [state, dispatch] = useReducer(swapiReducer, defaultState)
    return <SwapiContext.Provider value={{ ...state, dispatch }}>{children}</SwapiContext.Provider>
}

export const PlanetProvider = ({ children }: SwapiPlanetProps) => {
    const [state, dispatch] = useReducer(planetReducer, defaultPlanetState)
    return <PlanetContext.Provider value={{ ...state, dispatch }}>{children}</PlanetContext.Provider>
}

