import Vector3 from "./Vector3";

export default class InputController {
	constructor() {
		this.keyMap = {};
		this.mousePos = new Vector3();
	}

	bindEvents(target = document) {
		target.addEventListener("mouseup", this.setMouseUp.bind(this));
		target.addEventListener("mousedown", this.setMouseDown.bind(this));
		target.addEventListener("mousemove", this.setMousePos.bind(this));
		target.addEventListener("keyup",this.mapKeys.bind(this));
		target.addEventListener("keydown",this.mapKeys.bind(this));
	}

	unbindEvents() {
		target.removeEventListener("mouseup", this.setMouseUp.bind(this));
		target.removeEventListener("mousedown", this.setMouseDown.bind(this));
		target.removeEventListener("mousemove", this.setMousePos.bind(this));
		target.removeEventListener("keyup",this.mapKeys.bind(this));
		target.removeEventListener("keydown",this.mapKeys.bind(this));
	}

	setMousePos(e) {
		this.mousePos.set(e.pageX, e.pageY);
	}

	setMouseUp(e) {
		var fakeKey = {
			key: "mouse" + e.button,
			type: "keyup"
		};
		this.mapKeys(fakeKey)
	}

	setMouseDown(e) {
		var fakeKey = {
			key: "mouse" + e.button,
			type: "keydown"
		};
		this.mapKeys(fakeKey)
	}

	mapKeys(e) {
		e = e || event;
		this.keyMap[e.key] = e.type == 'keydown';
	}

	keyUp(key) {
		console.log(key);
	}

	keyDown(key) {
		console.log(key);
	}

	setKeys() {
		for (var key in this.keyMap) {
			if (this.keyMap[key]) {
				this.keyDown(key);
			} else {
				this.keyUp(key);
			}
		}
	}
}
