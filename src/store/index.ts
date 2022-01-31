import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./reducers";
import todoSaga from "./saga/todoSaga";

const sagaMiddleWare = createSagaMiddleware();


export const store = createStore(
	RootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(todoSaga);

