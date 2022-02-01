import TopBar from "../components/TopBar";
import HeroTab from "../components/HeroTab";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { SwapiContext } from '../context/context/swapi/SwapiContext';
import { SWAPI_LOADING, SWAPI_SUCCES, Hero } from '../context/context/swapi/dataTypes';
import { fetchHero } from '../context/context/swapi/SwapiActions'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Spinner from "../style/utils/Spinner";
import '../style/style.css';
import Button from '@mui/material/Button';
const Home = () => {
    const [number, setNumber] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setNumber(number + 1)
        if (number === 9) {
            setPageNumber(pageNumber + 1)
            setNumber(0)
        }
    }

    const heroContext = useContext(SwapiContext)
    useEffect(() => {
        async function gettingdata() {
            heroContext.dispatch({ type: SWAPI_LOADING })

            const hero = await fetchHero(pageNumber)
            heroContext.dispatch({ type: SWAPI_SUCCES, payload: hero })
        }
        gettingdata()
    }, [pageNumber])
    const HeroesShow = () => {
        if (heroContext.people.results !== undefined) {
            return (
                <Box sx={{ width: '100%', marginTop: "25px" }}>
                    <Grid container spacing={4}>
                        {heroContext.people.results.slice(number, number + 1).map((hero) => {
                            const subHero: Hero = hero
                            //WTF THIS OBJECT
                            return (
                                <Grid item xs={12} key={subHero.name}>
                                    <HeroTab birth_year={subHero.birth_year} eye_color={subHero.eye_color} films={subHero.films} hair_color={subHero.hair_color} height={subHero.height} homeworld={subHero.homeworld} mass={subHero.mass} name={subHero.name} skin_color={subHero.skin_color} species={subHero.species} starships={subHero.starships} url={subHero.url} vehicles={subHero.vehicles} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            )
        }
        else {
            return (
                <Spinner />
            )
        }
    }
    return (
        <div className="wraper">
            <TopBar />
            <Grid container spacing={1}>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
                <Grid item xs={12} md={10} lg={8} >
                    <HeroesShow />
                    <Button variant="contained" onClick={onClick}>Next</Button>
                </Grid>
                <Grid item xs={0} md={1} lg={2}>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home;


/*
import { useContext } from 'react';
import { SwapiContext } from '../context/context/swapi/SwapiContext';
import { SWAPI_LOADING, SWAPI_SUCCES } from '../context/context/swapi/dataTypes';
import { fetchHero } from '../context/context/swapi/SwapiActions'
const heroContext = useContext(SwapiContext)
const handleClick = async () => {
    if (heroContext) {
        heroContext.dispatch({ type: SWAPI_LOADING })
        const hero = await fetchHero()
        heroContext.dispatch({ type: SWAPI_SUCCES, payload: hero })
    }
}
return (
    <div>
        <button onClick={handleClick}>click</button>
        {heroContext.people ? <div>{heroContext.people.count}</div> : null}
    </div>
);
*/