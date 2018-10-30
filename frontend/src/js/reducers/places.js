import { PLACES } from '../actions/types';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACES.SET_PLACES_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};