class Section {
	static all = [];

	constructor({ id, name, place_id }) {
		this.id = id;
		this.name = name;
		this.place_id = place_id;

		this.main = document.createElement("div");

		this.main.id = `main-${this.name}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `section-${this.id}`;
		this.tipArea = document.createElement("div");
		this.tipArea.id = `section-${this.id}`;
		this.main.append(this.nameDiv, this.tipArea);

		// this.nameDiv.addEventListener("click", this.moreTips);

		Section.all.push(this);
	}

	allTips = () => {
		return Tip.all
			.filter((tip) => tip.section_id === this.id)
			.filter((tip) => tip.place_id === this.place_id);
	};

	renderTips = () => {
		this.tipArea.append(this.allTips().map((tip) => tip.main));
		this.tipArea.innerHTML = this.allTips().map((tip) => tip.renderTip());
	};

	renderSection = () => {
		return (this.nameDiv.innerHTML = `<h3 id="${this.name}">${this.name}</h3>`);
	};
}
