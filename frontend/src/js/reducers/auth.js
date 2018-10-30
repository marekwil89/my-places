import { AUTH } from '../actions/types';

const initialState = {
  logedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SET_LOGED_USER:
      return {
        ...state,
        logedUser: action.user,
      };
    default:
      return state;
  }
};