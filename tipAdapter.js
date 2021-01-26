class TipAdapter {
	static baseURL = "http://localhost:3000/tips";

	static getTips() {
		return fetch(TipAdapter.baseURL)
			.then((resp) => resp.json())
			.then(function (tipInfo) {
				return tipInfo.forEach(function (tip) {
					new Tip(
						tip.id,
						tip.section_id,
						tip.place_id,
						tip.info,
						tip.color,
						tip.like_count,
						tip.dislike_count
					);
				});
			});
	}
}
