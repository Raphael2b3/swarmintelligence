import type { Entity } from '$lib/abstraction/entity/entity';
import { historyManager } from '$lib/providers/history.svelte';

export class Recommendation {
	previous: Entity | undefined = $state(undefined);
	current: Entity | undefined = $state();
	next: Entity | undefined = $state();

	loadNext() {
		console.log('loadNext');
		// p, c, n = c, n, p;
		this.previous = this.current;
		this.current = this.next;
		this.next = historyManager.getNext();
	}

	loadPrevious() {
		console.log('loadPrevious');
		// p, c, n = n, p, c;
		this.next = this.current;
		this.current = this.previous;
		this.previous = historyManager.getPrevious();
	}

	getCurrent() {
		historyManager.watch(this.current);
		return this.current;
	}
}
