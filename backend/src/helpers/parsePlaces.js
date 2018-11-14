const parsePlaces = places => places.map(place => {

  return {
    ...place,
    categories: JSON.parse(place.categories),
    coordinates: JSON.parse(place.coordinates)
  }
})

export default parsePlaces;
