import { AUTH } from './types';
import { POSTconfig, GETconfig, HOSTconfig } from '../helpers/HTTPmethods';

export const setLogedUser = payload => ({
  type: AUTH.SET_LOGED_USER,
  ...payload
})

export const login = values => dispatch => {
  const httpConfig = POSTconfig(values);

  return fetch(`${HOSTconfig}/auth/login`, httpConfig)
    .then(res => res.json())
    .then((response) => {
      if (!response.errors) {
        sessionStorage.setItem('jwtToken', response.token);
        dispatch(setLogedUser(response));
      }

      return response.errors && response.errors;
    })
    .catch(error => console.log(error));
};

export const register = values => dispatch => {
  const httpConfig = POSTconfig(values);

  return fetch(`${HOSTconfig}/auth/register`, httpConfig)
    .then(res => res.json())
    .then((response) => {
      sessionStorage.setItem('jwtToken', response.token);
      dispatch(setLogedUser(response))

      return response.errors && response.errors;
    })
    .catch(error => console.log(error));
};

export const loged = () => dispatch => {
  const token = sessionStorage.getItem('jwtToken');
  const httpConfig = GETconfig(token);

  return fetch(`${HOSTconfig}/auth/loged`, httpConfig)
    .then(res => res.json())
    .then((response) => {

      dispatch(setLogedUser(response))
    })
    .catch(error => console.log(error));
}

export const logout = () => dispatch => {
  sessionStorage.setItem('jwtToken', '');
  dispatch(setLogedUser({}))
}
