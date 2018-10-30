import { combineReducers } from 'redux';
import { reducer as login } from 'redux-form';

import auth from './auth';
import places from './places';

const rootReducer = combineReducers({
  auth,
  places,
  form: login,
});

export default rootReducer;