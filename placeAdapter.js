class PlaceAdapter {
	static fetchPlaces() {
		return fetch("http://localhost:3000/places")
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

	// static createPlace({ name }) {
	// 	return fetch("http://localhost:3000/places", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Accept: "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			place: {
	// 				name,
	// 			},
	// 		}),
	// 	});
	// }
}
