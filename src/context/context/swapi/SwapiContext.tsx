import { createContext, useReducer, useState } from 'react'
import { Hero, SwapiDispatchTypes } from './dataTypes'
import { swapiReducer, defaultState } from './SwapiReducer'

type SwapiProps = {
    children: React.ReactNode
}
type HeroContextType = {
    dispatch: React.Dispatch<SwapiDispatchTypes>,
    hero: Hero,
    loading: boolean,
}

export const SwapiContext = createContext<HeroContextType>({} as HeroContextType)


export const SwapiProvider = ({ children }: SwapiProps) => {

    const [state, dispatch] = useReducer(swapiReducer, defaultState)


    return <SwapiContext.Provider value={{ ...state, dispatch }}>{children}</SwapiContext.Provider>
}

