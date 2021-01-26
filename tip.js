class Tip {
	static all = [];

	constructor({
		id,
		section_id,
		place_id,
		info,
		color,
		like_count,
		dislike_count,
	}) {
		this.id = id;
		this.section_id = section_id;
		this.place_id = place_id;
		this.info = info;
		this.color = color;
		this.like_count = like_count;
		this.dislike_count = dislike_count;

		this.main = document.createElement("div");
		this.main.id = `sectionMain-${this.id}`;
		this.colorDiv = document.createElement("div");
		this.colorDiv.id = `change-${this.id}`;
		this.infoDiv = document.createElement("div");
		this.infoDiv.id = `sectionInfo-${this.id}`;
		this.likeArea = document.createElement("div");
		this.likeButton = document.createElement("button");
		this.likeButton.id = `like-${this.id}`;
		this.dislikeButton = document.createElement("button");
		this.dislikeButton.id = `dislike-${this.id}`;
		this.likeArea.id = `sectionLike-${this.id}`;
		this.likeArea.append(this.likeButton, this.dislikeButton);
		this.main.append(this.colorDiv, this.infoDiv, this.likeArea);

		this.nameDiv.addEventListener("click", this.moreTips);
		this.dislikeButton.addEventListener("click", this.addDislike);
		this.likeButton.addEventListener("click", this.addLike);

		Tip.all.push(this);
	}

	renderTip = () => {
		this.infoDiv.innerHTML = `<p>${this.info}</p>`;
		this.changeColorDiv();
	};

	changeColorDiv = () => {
		if (this.color === "green") {
			this.colorDiv.style.backgroundColor = "green";
		} else if (this.color === "yellow") {
			this.colorDiv.style.backgroundColor = "yellow";
		} else {
			this.colorDiv.style.backgroundColor = "red";
		}
	};
}
