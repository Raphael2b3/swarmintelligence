<script lang="ts">
	import StatementRecommendation from '$lib/features/statement/components/Recommendation.svelte';
	import ConnectionRecommendation from '$lib/features/statement/features/connection/components/Recommendation.svelte';
	import { Connection } from '../../features/statement/features/connection/connection.svelte';
	import { Statement } from '../../features/statement/statement.svelte';
	import type { Entity } from '../entity/entity';
	let { entity }: { entity: Entity } = $props();
</script>

{#if entity === undefined}
	<div class="flex h-full w-full items-center justify-center">
		<span class="loader"></span>
	</div>
{:else if entity instanceof Statement}
	<StatementRecommendation statement={entity} />
{:else if entity instanceof Connection}
	<ConnectionRecommendation connection={entity} />
{:else}
	<p>Not implemented yet</p>
	<!-- <Duplication.Recommendation duplication={entity} /> -->
{/if}

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
