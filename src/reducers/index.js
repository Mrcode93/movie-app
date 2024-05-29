import { combineReducers } from "redux";
import counterReducer from "./counter";
import Logged_In from "./logged";
import getMoviesReducer from "./movies";

const allReducers = combineReducers({
    conter: counterReducer,
    logged: Logged_In,
    movies: getMoviesReducer,
});

export default allReducers;