import React from 'react';
import { useContext } from 'react';
import { SwapiContext } from '../context/context/swapi/SwapiContext';
import { SwapiDispatchTypes, SWAPI_LOADING, SWAPI_SUCCES } from '../context/context/swapi/dataTypes';
import { fetchHero } from '../context/context/swapi/SwapiActions'
import axios from 'axios';
const Home = () => {
    const heroContext = useContext(SwapiContext)
    const handleClick = async () => {
        if (heroContext) {
            heroContext.dispatch({ type: SWAPI_LOADING })
            const hero = await fetchHero("1")
            heroContext.dispatch({ type: SWAPI_SUCCES, payload: hero })
        }
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            {heroContext ? <div>{heroContext.hero?.homeworld}</div> : null}
        </div>
    );
};

export default Home;
