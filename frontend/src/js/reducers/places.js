import { PLACES } from '../actions/types';

const initialState = {
  searchPlace: null,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACES.SET_PLACES_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case PLACES.SET_SEARCH_PLACE:
      return {
        ...state,
        searchPlace: action.payload,
      }
    default:
      return state;
  }
};