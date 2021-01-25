class Section {
	static all = [];

	constructor({ name, place_id }) {
		this.name = name;
		this.place_id = place_id;

		this.main = document.createElement("div");
		this.main.id = `section-${this.id}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `section-${this.id}`;
		this.tipArea = document.createElement("div");
		this.tipArea.id = `section-${this.id}`;
		this.main.append(this.nameDiv, this.tipArea);

		Section.all.push(this);
	}
}
