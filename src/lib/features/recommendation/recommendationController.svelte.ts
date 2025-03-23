import type { Entity } from '$lib/abstraction/entity/entity';
import { historyManager } from '$lib/providers/history.svelte';

class RecommendationController {
	previous?: Entity = $state();
	current?: Entity = $state({ id: '0', type: 'statement' });
	next?: Entity = $state({ id: '1', type: 'statement' });

	loadNext() {
		// p, c, n = c, n, p;
		this.previous = this.current;
		this.current = this.next;
		const nextId = Math.floor(Math.random() * 9).toString();
		this.next = { id: nextId, type: 'statement' };
		historyManager.watch(this.previous!);
	}

	loadPrevious() {
		// p, c, n = n, p, c;
		this.next = this.current;
		this.current = this.previous;
		this.previous = historyManager.getPrevious();
	}

	getCurrent() {
		return this.current;
	}
}

export const recommendationController = new RecommendationController();
