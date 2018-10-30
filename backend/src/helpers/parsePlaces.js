const parsePlaces = places => places.map(place => {
  return {
    ...place,
    coordinates: place.coordinates = JSON.parse(place.coordinates)
  }
})

export default parsePlaces;
