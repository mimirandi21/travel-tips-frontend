class PlaceAdapter {
	static fetchPlaces() {
		return fetch("https://travel-tips-updated.herokuapp.com/places")
			.then((res) => res.json())
			.then((placeInfo) => {
				return placeInfo.forEach(function (place) {
					console.log(place);
					place.sections.forEach(function (sec) {
						new Section(sec);
					});
					place.tips.forEach(function (tip) {
						new Tip(tip);
					});
					new Place(place);
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
}
