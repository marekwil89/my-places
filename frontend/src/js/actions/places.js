import { GETconfig, POSTconfig, HOSTconfig } from '../helpers/HTTPmethods';
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
    .then(response => dispatch(setPlacesList(response)))
    .catch(error => console.log(error));
};

export const createPlaces = values => dispatch => {

  const categoriesArr = Object.keys(values.categories).filter(key => values.categories[key] === true && values.categories[key]);

  values.categories = categoriesArr;

  const httpConfig = POSTconfig(values);

  return fetch(`${HOSTconfig}/places`, httpConfig)
  // .then(res => res.json())
  // .then((response) => console.log(response))
  // .catch(error => console.log(error));
}
