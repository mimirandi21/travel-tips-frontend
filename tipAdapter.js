class TipAdapter {
	static baseURL = "https://obscure-depths-42428.herokuapp.com/tips";

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
		return fetch("https://obscure-depths-42428.herokuapp.com/tips", {
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
		// .then(location.reload());
	}

	static EditTip(tip_id, like_count, dislike_count) {
		return fetch(`https://obscure-depths-42428.herokuapp.com/tips/${tip_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				tip: {
					id: tip_id,
					like_count: like_count,
					dislike_count: dislike_count,
				},
			}),
		}).then(function (resp) {
			return resp.json();
		});
		// .then(function (jsonMsg) {
		// 	if (jsonMsg.successful) {
		// 		new Tip(jsonMsg);
		// 	}
		// });
		// .then(location.reload());
	}
}
