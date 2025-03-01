class UIState {
	flyOutMenuOpen = $state(false);
	counter = $state(0);
}

class Subclass {
	subCounter = $state(0);

	increment() {
		this.subCounter++;
	}

	decrement() {
		this.subCounter--;
	}
}

export default new UIState();
