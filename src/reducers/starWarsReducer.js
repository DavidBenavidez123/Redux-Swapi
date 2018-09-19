import { FETCH, FETCH_SUCCESS, FETCH_ERROR, } from '../actions';


const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        chars: [...state.chars, ...action.payload],
        fetching: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
