import type { Entity } from '$lib/abstraction/entity/entity';
import { historyManager } from '$lib/providers/history.svelte';

class Recommendation {
	previous?: Entity = $state();
	current?: Entity = $state({ id: '0', type: 'statement' });
	next?: Entity = $state({ id: '1', type: 'statement' });
	counter = $state(0);
	
	loadNext() {
		console.log('loadNext', this.current, this.next, this.previous);
		// p, c, n = c, n, p;

		this.previous = this.current;
		this.current = this.next;
		const nextId = Math.floor(Math.random() * 9).toString();
		this.next = { id: nextId, type: 'statement' };
	}

	loadPrevious() {
		console.log('loadPrevious');
		// p, c, n = n, p, c;
		this.next = this.current;
		this.current = this.previous;
		this.previous = historyManager.getPrevious();
	}

	getCurrent() {
		console.log('getCurrent', this.current);
		historyManager.watch(this.current);
		return this.current;
	}
}

export const recommendation = new Recommendation();
