class PlaceAdapter {
	static baseURL = "http://localhost:3000/places";

	static getPlaces() {
		return fetch("http://localhost:3000/places")
			.then((resp) => resp.json())
			.then(function (plInfo) {
				return plInfo.forEach(function (pl) {
					pl.sections.forEach(function (sec) {
						return new Section(sec);
					});
					pl.tips.forEach(function (tip) {
						return new Tip(tip);
					});
					return new Place(pl);
				});
			});
	}
}
