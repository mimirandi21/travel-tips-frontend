class Section {
	static all = [];

	constructor({ id, name, place_id }) {
		this.id = id;
		this.name = name;
		this.place_id = place_id;

		this.main = document.createElement("div");
		this.main.id = `main-${this.name}`;
		this.wrapper = document.createElement("div");
		this.wrapper.id = `wrapper-${this.name}`;
		this.nameDiv = document.createElement("div");
		this.nameDiv.id = `section`;
		this.tipArea = document.createElement("div");
		this.tipArea.id = `tip-section`;
		this.wrapper.append(this.nameDiv, this.tipArea);
		this.main.append(this.wrapper);
		this.main.addEventListener("click", this.onCardClick);

		Section.all.push(this);
	}

	toggleExpansion = (element, to, duration = 350) => {
		return new Promise((res) => {
			element.animate(
				[
					{
						top: to.top,
						left: to.left,
						width: to.width,
						height: to.height,
					},
				],
				{ duration, fill: "forwards", ease: "ease-in" }
			);
			setTimeout(res, duration);
		});
	};

	onCardClick = async (e) => {
		// const likeArea = document.querySelectorAll("#likeSection")

		const places = document.querySelector("#places");
		const card = this.main;
		const likes = document.querySelectorAll("#likeSection");

		// clone the card
		const cardClone = document.createElement("div");
		cardClone.id = `clone-${this.name}`;
		// let newarea = document.createElement("div");
		// cardClone.appendChild(newarea);
		cardCloneCreate(cardClone, this);
		renderNewTipForm(cardClone, this);

		let newarea = document.createElement("div");
		newarea.id = "newarea";
		cardClone.appendChild(newarea);

		// get the location of the card in the view
		const { top, left, width, height } = card.getBoundingClientRect();
		// position the clone on top of the original
		cardClone.style.position = "fixed";
		// hide the original card with opacity
		card.style.opacity = "0";
		// add card to the same container

		places.appendChild(cardClone);

		// create a close button to handle the undo
		const closeButton = document.createElement("button");
		// position the close button top corner
		closeButton.style = `
			position: absolute;
			z-index: 10000;
			top: 35px;
			right: 35px;
			width: 35px;
			height: 35px;
			border-radius: 50%;
			background-color: #11698E;
		`;

		// attach click event to the close button
		closeButton.addEventListener("click", async () => {
			// remove the button on close
			closeButton.remove();
			// remove the display style so the original content is displayed right
			cardClone.style.removeProperty("display");
			cardClone.style.removeProperty("padding");
			// show original card content
			[...cardClone.children].forEach((child) =>
				child.style.removeProperty("display")
			);

			this.fadeContent(cardClone, "0");
			// shrink the card back to the original position and size
			await this.toggleExpansion(cardClone, {
				top: `${top}px`,
				left: `${left}px`,
				width: `${width}px`,
				height: `${height}px`,
			});

			// show the original card again
			card.style.removeProperty("opacity");
			// remove the clone card
			cardClone.remove();
			// fade the content away

			this.fadeContent(cardClone, "0").then(() => {
				[...cardClone.children].forEach(
					(child) => (child.style.display = "none")
				);
			});
		});
		// expand the clone card
		await this.toggleExpansion(
			cardClone,
			{
				top: "100px",
				left: "10%",
				width: "80vw",
				height: "80vh",
			},
			300
		);
		// set the display block so the content will follow the normal flow in case the original card is not display block

		cardClone.style.display = "inline-block";
		cardClone.style.listStyle = "square";
		cardClone.style.textAlign = "left";
		let makeTip = document.getElementById("newTipForm");
		makeTip.addEventListener("submit", (e) => {
			console.log(this);
			e.preventDefault();
			let colors = e.currentTarget[1].value;
			let sections = e.currentTarget[3].value;
			let places = e.currentTarget[2].value;
			let newinfo = e.currentTarget[0].value;
			TipAdapter.makeNewTip(sections, places, newinfo, colors);
			// window.location.reload();
			// places.appendChild(cardClone);
			cardCloneUpdate(cardClone, this);
			// renderNewTipForm(cardClone, this);

			e.currentTarget.reset();
			return false;
		});
		// append the close button after the expansion is done

		cardClone.appendChild(closeButton);
	};

	fadeContent = (element, opacity, duration = 300) => {
		return new Promise((res) => {
			[...element.children].forEach((child) => {
				requestAnimationFrame(() => {
					child.style.transition = `opacity ${duration}ms linear`;
					child.style.opacity = opacity;
				});
			});
			setTimeout(res, duration);
		});
	};

	allTips = () => {
		return Tip.all
			.filter((tip) => tip.section_id == this.id)
			.filter((tip) => tip.place_id == this.place_id);
	};
	bigjfk = () => {
		this.renderBigTip();
		this.bigTips();
	};

	jfk = () => {
		this.renderTips();
		this.fuckingTips();
	};
	renderTips = () => {
		if (this.allTips().length > 0) {
			let tips = this.allTips().slice(0, 3);
			tips.forEach((tip) => this.tipArea.append(tip.infoDiv));
		}
	};

	renderBigTip = () => {
		if (this.allTips().length > 0) {
			this.allTips().forEach((tip) => newarea.append(tip.main));
		}
	};
	fuckingTips = () => {
		if (this.allTips().length > 0) {
			this.allTips()
				.map((tip) => tip.renderTip())
				.join(" ");
		}
	};
	bigTips = () => {
		this.allTips().map((tip) => tip.renderTip());
	};

	renderFirstThreeTips = () => {
		let tips = this.allTips().slice(0, 3);
		tips.forEach((tip) => this.tipArea.append(tip.main));

		if (this.allTips().length > 3) {
			let tips = this.allTips().slice(0, 3);
			return tips.map((tip) => tip.renderTip()).join(" ");
		} else {
			return this.renderTips();
		}
	};

	renderSection = () => {
		return (this.nameDiv.innerHTML = `<h3 id="${this.name}"><span>${this.name}</span></h3>`);
	};

	newTipToRails = (e) => {
		debugger;
		console.log(this);
		e.preventDefault();
		let colors = e.currentTarget[1].value;
		let sections = e.currentTarget[3].value;
		let places = e.currentTarget[2].value;
		let newinfo = e.currentTarget[0].value;
		TipAdapter.makeNewTip(sections, places, newinfo, colors);
		e.currentTarget.reset();
		return false;
	};
}
