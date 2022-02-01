import axios from "axios";

const API = "https://swapi.py4e.com/api"

const Swapi = axios.create({
    baseURL:API
})

export const fetchHero = async (number:number) => {
    const response = await Swapi.get(`/people/?page=${number}`)
    return response.data
}

export const fetchPlanet = async (planet:string) =>{
    const response = await axios.get(`${planet}`)
    return response.data
}