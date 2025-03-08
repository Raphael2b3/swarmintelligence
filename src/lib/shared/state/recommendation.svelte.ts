import { getRecommendationDB } from '$lib/database';
import type { IEntity, IEntityType } from '$lib/shared/types';

let current: IEntity | undefined = $state(getRecommendationDB());
let previous: IEntity | undefined = $state(undefined);
let next: IEntity | undefined = $state(getRecommendationDB());

export const recommendationManager = {
	loadNext() {
		console.log('loadNext');
		// p, c, n = c, n, p;
		previous = current;
		current = next;
		next = getRecommendationDB();
	},

	loadPrevious() {
		console.log('loadPrevious');
		// p, c, n = n, p, c;
		next = current;
		current = previous;
		previous = getRecommendationDB();
	},
	get current() {
		return current;
	},
	get next() {
		return next;
	},
	get previous() {
		return previous;
	}
};
