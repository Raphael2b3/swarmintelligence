import type { Entity } from '$lib/abstraction/entity/entity';
import { historyManager } from '$lib/providers/history.svelte';

class PageScrollController {
	counter = $state(0);
	
	scrollDiv?: HTMLDivElement;
	previosContainer?: HTMLDivElement;
	currentContainer?: HTMLDivElement;
	nextContainer?: HTMLDivElement;
	observer?: IntersectionObserver;
	onNext?: () => void;
	onPrevious?: () => void;

	initObserver(scrollDiv: HTMLDivElement, previosContainer: HTMLDivElement, currentContainer:HTMLDivElement,  nextContainer: HTMLDivElement){
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

	initCallbacks(onNext: () => void, onPrevious: () => void){
		this.onNext = onNext;
		this.onPrevious = onPrevious;
	}
	
	intersectingHandler(
		entries: IntersectionObserverEntry[],_:any ) {entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.id === 'prev' && this.counter > 0) {
					this.counter--;
					this.onPrevious!();
					this.snapToMid();
				} else if (entry.target.id === 'next') {
					this.counter++;
					this.onNext!();
					this.snapToMid();
				}
			}
		});
	};

	snapToMid(){
		this.currentContainer?.scrollIntoView({ behavior: this.counter < 0 ? 'instant' : 'smooth' });
	}

	scrollToNext(){
		this.nextContainer?.scrollIntoView({ behavior: 'smooth' });
	}

	release(){
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
