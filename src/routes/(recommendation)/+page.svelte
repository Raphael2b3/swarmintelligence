<script lang="ts">
	import * as Statement from '$lib/features/statement/';
	import * as Connection from '$lib/features/connection/';
	import * as Duplication from '$lib/features/duplication/';
	import PageScroller from '$lib/shared/components/pagescroller/PageScroller.svelte';
	import { recommendationManager } from '$lib/shared/state/recommendation.svelte';
	import type { IEntity, IStatement, IConnection, IDuplication } from '$lib/shared/types';
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
	<PageScroller
		onLoadNext={recommendationManager.loadNext}
		onLoadPrevious={recommendationManager.loadPrevious}
	>
		{#snippet previousWidget()}
			{@render entity(recommendationManager.previous)}
		{/snippet}
		{#snippet currentWidget()}
			{@render entity(recommendationManager.current)}
		{/snippet}
		{#snippet nextWidget()}
			{@render entity(recommendationManager.next)}
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
