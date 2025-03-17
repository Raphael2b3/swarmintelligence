import type { Entity } from '$lib/abstraction/entity/entity';
import { Statement } from '$lib/features/statement/statement.svelte';
import { historyManager } from '$lib/providers/history.svelte';

class Recommendation {
	previous?: Entity = $state({ id: '0', type: 'statement' });
	current?: Entity = $state({ id: '0', type: 'statement' });
	next?: Entity = $state({ id: '0', type: 'statement' });

	loadNext() {
		console.log('loadNext', this.current, this.next, this.previous);
		// p, c, n = c, n, p;

		//this.previous = this.current;
		//this.current = this.next;

		this.previous = { id: '0', type: 'statement' };
		this.current = { id: '0', type: 'statement' };
		this.next = { id: '0', type: 'statement' };
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

export const recommendation = new Recommendation();
