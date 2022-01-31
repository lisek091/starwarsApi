import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

const todoApi = axios.create({
    baseURL: "https://swapi.dev/api/",
});


function* fetchSaga(): Generator<StrictEffect> {
   
}



export default fetchSaga;