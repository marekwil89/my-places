import { GETconfig, HOSTconfig } from '../config/HTTPmethods';
import { PLACES } from './types';

export const setPlacesList = payload => ({
  type: PLACES.SET_PLACES_LIST,
  payload,
})

export const getPlaces = (id) => dispatch => {
  console.log('zapytanie !')
  const httpConfig = GETconfig();

  return fetch(`${HOSTconfig}/places?id=${id}`, httpConfig)
    .then(res => res.json())
    .then((response) => {
      dispatch(setPlacesList(response));
    })
    .catch(error => console.log(error));
};

export const createPlaces = () => dispatch => {
  
}