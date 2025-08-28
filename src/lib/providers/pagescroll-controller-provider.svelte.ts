class PageScrollController {
	counter = $state(0);

	scrollDiv?: HTMLDivElement;
	previosContainer?: HTMLDivElement;
	currentContainer?: HTMLDivElement;
	nextContainer?: HTMLDivElement;
	observer?: IntersectionObserver;
	onNext?: () => void;
	onPrevious?: () => void;

	initObserver(
		scrollDiv: HTMLDivElement,
		previosContainer: HTMLDivElement,
		currentContainer: HTMLDivElement,
		nextContainer: HTMLDivElement
	) {
		this.scrollDiv = scrollDiv;
		this.previosContainer = previosContainer;
		this.currentContainer = currentContainer;
		this.nextContainer = nextContainer;
		this.observer = new IntersectionObserver(this.intersectingHandler, {
			root: this.scrollDiv,
			threshold: 1,
			rootMargin: '0.2px 90% 0.2px 90%'
		});

		this.observer.observe(this.previosContainer!);
		this.observer.observe(this.nextContainer!);
	}

	initCallbacks(onNext: () => void, onPrevious: () => void) {
		this.onNext = onNext;
		this.onPrevious = onPrevious;
		console.log('initCallbacks', this.onNext, this.onPrevious);
	}

	intersectingHandler = (entries: IntersectionObserverEntry[], _: any) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.id === 'prev') {
					if (this.counter == 0) return this.scrollToMid(true); // Smooth = true
					this.counter--;
					this.onPrevious?.();
					this.scrollToMid();
				} else if (entry.target.id === 'next') {
					this.counter++;
					this.onNext?.();
					this.scrollToMid();
				}
			}
		});
	};

	scrollToMid(smooth = false) {
		this.currentContainer?.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' });
	}

	scrollToNext() {
		this.nextContainer?.scrollIntoView({ behavior: 'smooth' });
	}
	release() {
		this.observer?.disconnect();
		this.counter = 0;
		this.onNext = undefined;
		this.onPrevious = undefined;
		this.scrollDiv = undefined;
		this.previosContainer = undefined;
		this.currentContainer = undefined;
		this.nextContainer = undefined;
		this.observer = undefined;
	}
}

export const pageScrollController = new PageScrollController();
