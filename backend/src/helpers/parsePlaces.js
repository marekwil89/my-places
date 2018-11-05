const parsePlaces = places => places.map(place => {
  return {
    ...place,
    categories: JSON.parse(place.categories),
    address: JSON.parse(place.address)
  }
})

export default parsePlaces;
