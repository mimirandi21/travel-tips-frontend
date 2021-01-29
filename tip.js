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
		this.fuckyou = document.createElement("div");
		this.fuckyou.id = "fuckyou";
		this.colorDiv = document.createElement("div");
		this.colorDiv.id = `change`;
		this.infoDiv = document.createElement("li");
		this.infoDiv.id = `tip-list`;
		this.likeArea = document.createElement("div");
		this.likeButton = document.createElement("button");
		this.likeButton.id = `like-button`;
		this.dislikeButton = document.createElement("button");
		this.dislikeButton.id = `dislike-button`;
		this.likeArea.id = `likeSection`;
		this.likeArea.append(this.likeButton, this.dislikeButton);
		this.fuckyou.append(this.colorDiv, this.infoDiv, this.likeArea);
		this.main.appendChild(this.fuckyou);

		this.likeButton.addEventListener("click", this.addLike);
		Tip.all.push(this);
	}
	renderTip = () => {
		return (this.infoDiv.innerText = `${this.info}`);
	};
	rendernewtip = () => {
		this.main.removeChild(this.fuckyou);
		this.main.id = "main";
		this.fuckyou = document.createElement("div");
		this.fuckyou.id = "fuckyou";
		this.colorDiv = document.createElement("div");
		this.colorDiv.id = `change`;
		this.infoDiv = document.createElement("li");
		this.infoDiv.id = `tipsahoy`;
		this.likeArea = document.createElement("div");
		this.likeButton = document.createElement("button");
		this.likeButton.id = `like-button`;
		this.likeButton.innerText = "Like";
		this.likeSpace = document.createElement("h3");
		this.likeSpace.id = "likeme";
		this.dislikeButton = document.createElement("button");
		this.dislikeButton.id = `dislike-button`;
		this.dislikeButton.innerText = "Dislike";
		this.dislikeSpace = document.createElement("h3");
		this.dislikeSpace.id = "dislikeme";
		this.likeArea.id = `likeSection`;
		this.likeArea.append(
			this.likeButton,
			this.likeSpace,
			this.dislikeButton,
			this.dislikeSpace
		);
		this.fuckyou.append(this.colorDiv, this.infoDiv, this.likeArea);
		this.main.appendChild(this.fuckyou);

		this.dislikeButton.addEventListener("click", this.addDislike);
		this.likeButton.addEventListener("click", this.addLike);
	};

	tipInfo = () => {
		return (this.infoDiv = `<li id="tip-list"><span>${this.info}</span></li>`);
	};
	likeInfo = () => {
		return (this.likeSpace.innerText = `${this.like_count}`);
	};
	dislikeInfo = () => {
		return (this.dislikeSpace.innerText = `${this.dislike_count}`);
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

	// addDislike = () => {
	// 	this.dislikeSpace.innerText =
	// }
}
