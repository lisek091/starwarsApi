import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Hero, SWAPI_SUCCES_PLANET, Planet } from '../context/context/swapi/dataTypes';
import { useContext, useEffect } from 'react';
import { PlanetContext } from '../context/context/swapi/SwapiContext';
import { fetchPlanet } from '../context/context/swapi/SwapiActions'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 240,
    lineHeight: '60px',
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });


const HeroTab = (hero: Hero) => {
    const planetContext = useContext(PlanetContext)
    useEffect(() => {
        async function gettingPlanet() {
            const planet = await fetchPlanet(hero.homeworld)
            planetContext.dispatch({ type: SWAPI_SUCCES_PLANET, payload: planet })
        }
        gettingPlanet()

    }, [hero])
    return (
        <ThemeProvider theme={darkTheme}>
            <Item >
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="h4" gutterBottom component="div">
                                {hero.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {planetContext.planet.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {hero.birth_year !== "unknown" ? hero.birth_year : hero.species}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            menu???
                        </Grid>
                        <Grid item xs={4}>
                            OBRAZEK
                        </Grid>
                    </Grid>
                </Box>
            </Item>
        </ThemeProvider >
    )
};

export default HeroTab;
