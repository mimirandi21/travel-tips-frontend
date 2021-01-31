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

	static makeNewTip(section_id, place_id, info, color) {
		return fetch("http://localhost:3000/tips", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				tip: {
					section_id: section_id,
					place_id: place_id,
					info: info,
					color: color,
					like_count: 0,
					dislike_count: 0,
				},
			}),
		})
			.then(function (resp) {
				return resp.json();
			})
			.then(function (jsonMsg) {
				if (jsonMsg.successful) {
					new Tip(jsonMsg);
				}
			});
	}
}
