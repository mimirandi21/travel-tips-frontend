class Tip {
	static all = [];

	constructor({
		section_id,
		place_id,
		info,
		color,
		like_count,
		dislike_count,
	}) {
		this.section_id = section_id;
		this.place_id = place_id;
		this.info = info;
		this.color = color;
		this.like_count = like_count;
		this.dislike_count = dislike_count;

		this.main = document.createElement("div");
		this.main.id = `section-${this.id}`;
		this.colorDiv = document.createElement("div");
		this.colorDiv.id = `section-${this.id}`;
		this.infoDiv = document.createElement("div");
		this.infoDiv.id = `section-${this.id}`;
		this.likeArea = document.createElement("div");
		this.likeButton = document.createElement("button");
		this.likeButton.id = `like-${this.id}`;
		this.dislikeButton = document.createElement("button");
		this.dislikeButton.id = `dislike-${this.id}`;
		this.likeArea.id = `section-${this.id}`;
		this.likeArea.append(this.likeButton, this.dislikeButton);
		this.main.append(this.infoDiv, this.likeArea);

		this.nameDiv.addEventListener("click", this.moreTips);
		this.dislikeButton.addEventListener("click", this.addDislike);
		this.likeButton.addEventListener("click", this.addLike);

		Section.all.push(this);
	}

	renderInfo() {}
}
