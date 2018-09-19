import axios from 'axios';
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'ETCH_SUCCESS';
export const FETCH_ERROR = 'DATA_FETCH_ERROR';




export const fetchData = () => {
    return dispatch => {

        dispatch({ type: FETCH});
        axios
            .get('https://swapi.co/api/people')
            .then(response => {
                dispatch({ type: FETCH_SUCCESS, payload: response.data.results });
            })
            .catch( err => {
                console.log(err);
                dispatch({ type: FETCH_ERROR });
            });
    };
};