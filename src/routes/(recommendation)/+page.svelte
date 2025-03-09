<script lang="ts">
	import * as Statement from '$lib/features/statement/';
	import * as Connection from '$lib/features/connection/';
	import * as Duplication from '$lib/features/duplication/';
	import PageScroller from '$lib/shared/components/pagescroller/PageScroller.svelte';
	import type { IEntity, IStatement, IConnection, IDuplication } from '$lib/shared/types';
	import { getRecommendationDB } from '$lib/database';
	import { historyManager } from '$lib/shared/state/history.svelte';

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

{#snippet entity(entity: IEntity | undefined)}
	{#if entity === undefined}
		<div class="flex h-full w-full items-center justify-center">
			<span class="loader"></span>
		</div>
	{:else if entity.type === 'statement'}
		<Statement.Recommendation statement={entity as IStatement} />
	{:else if entity.type === 'connection'}
		<Connection.Recommendation connection={entity as IConnection} />
	{:else if entity.type === 'duplication'}
		<Duplication.Recommendation duplication={entity as IDuplication} />
	{/if}
{/snippet}

<div class="h-full w-full">
	<PageScroller onLoadNext={loadNext} onLoadPrevious={loadPrevious}>
		{#snippet previousWidget()}
			{@render entity(previous)}
		{/snippet}
		{#snippet currentWidget()}
			{@render entity(getCurrent())}
		{/snippet}
		{#snippet nextWidget()}
			{@render entity(next)}
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
