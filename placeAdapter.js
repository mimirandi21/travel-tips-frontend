class PlaceAdapter {
	static getPlaces = () => {
		fetch("http://localhost:3000/places")
			.then((res) => res.json())
			.then((placeInfo) => {
				placeInfo.forEach(function (place) {
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
	};
}
