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
		this.colorDiv.id = `change-${this.id}`;
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
		// this.changeColorDiv();
		return (this.infoDiv.innerText = `${this.info}`);
	};

	tipInfo = () => {
		return (this.main.childNodes[0].childNodes[1].innerHTML = `<li id="tip-list"><span>${this.info}</span></li>`);
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

	// renderTip = () => {
	// 	return (this.main.innerHTML = `
	// 		<div id="fuckyou"><div id="change-${this.id}"><li id="tip-list"><span>${this.info}</span><div id="likeSection"><div id="likeme-${this.id}"><button id="like-button">Like</button><h3 id="megood-${this.id}"></h3></div><br><div id="dislikeme-${this.id}"><button id="dislike-button">Dislike</button><h3 id="mebad-${this.id}"></h3></div></div></div></li><br></div></div>`);
	// };
}
