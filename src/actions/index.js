import axios from "axios";

// Define your action types
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
export const LOADING = "LOADING";

// Define your action creator
export const getMovies = (page = 1, search = "") => {
    return async(dispatch) => {
        dispatch({ type: LOADING, payload: true });
        const url = search ?
            `https://api.themoviedb.org/3/search/movie?query=${search}` :
            "https://api.themoviedb.org/3/discover/movie";

        const options = {
            method: "GET",
            url: url,
            params: { include_video: "true", page: page },
            headers: {
                accept: "application/json",
                Authorization: "Bearer "  },
        };

        try {
            const response = await axios.request(options);
            dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data });
            dispatch({ type: LOADING, payload: false });
        } catch (error) {
            dispatch({ type: GET_MOVIES_FAILURE, payload: error.message });
            dispatch({ type: LOADING, payload: false });
        }
    };
};

export const increment = () => {
    return {
        type: "INCREMENT",
    };
};
export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};

export const login = () => {
    return {
        type: "LOGIN",
    };
};
