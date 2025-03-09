<script lang="ts">
	import PageScroller from '$lib/components/pagescroller/PageScroller.svelte';
	import type { IEntity, IStatement, IConnection, IDuplication } from '$lib/types';
	import { getRecommendationDB } from '$lib/database';
	import { historyManager } from '$lib/providers/history.svelte';
	import Recommendation from '$lib/features/recommendation/Recommendation.svelte';

	let current: IEntity | undefined = $state(getRecommendationDB());
	let previous: IEntity | undefined = $state(undefined);
	let next: IEntity | undefined = $state(getRecommendationDB());

	function loadNext() {
		console.log('loadNext');
		// p, c, n = c, n, p;
		previous = current;
		current = next;
		next = historyManager.getNext() ?? getRecommendationDB();
	}

	function loadPrevious() {
		console.log('loadPrevious');
		// p, c, n = n, p, c;
		next = current;
		current = previous;
		previous = historyManager.getPrevious();
	}

	function getCurrent() {
		historyManager.watch(current);
		return current;
	}
</script>

<div class="h-full w-full">
	<PageScroller onLoadNext={loadNext} onLoadPrevious={loadPrevious}>
		{#snippet previousWidget()}
			<Recommendation entity={previous!} />
		{/snippet}
		{#snippet currentWidget()}
			<Recommendation entity={current!} />
		{/snippet}
		{#snippet nextWidget()}
			<Recommendation entity={next!} />
		{/snippet}
	</PageScroller>
</div>

<style>
	.loader {
		width: 48px;
		height: 48px;
		border: 5px solid hsl(var(--secondary-foreground));
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
