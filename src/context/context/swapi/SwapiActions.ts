import axios from "axios";

const API = "https://swapi.py4e.com/api"

const Swapi = axios.create({
    baseURL:API
})

export const fetchHero = async (text:string) => {
    const response = await Swapi.get(`/people/${text}/`)
    return response.data
}