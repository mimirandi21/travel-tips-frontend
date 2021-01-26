let searchPlace = document.getElementById("searchbar")

searchPlace.addEventListener("keyup", (e){
    let input = e.target.value.toLowerCase()
    let places = Place.all

    let filteredPlaces = places.filter(place => {
        return (
            place.name.includes(input)
        )
    })
    displayCharacters(filteredPlaces)
})
