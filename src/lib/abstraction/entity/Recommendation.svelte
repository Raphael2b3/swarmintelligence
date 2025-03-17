<script lang="ts">
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
	import RecommendationStatement from '$lib/features/statement/components/Recommendation.svelte';
	import RecommendationConnection from '$lib/features/statement/features/connection/components/Recommendation.svelte';
	import type { Entity } from './entity';

	let { entity, m = '' }: { entity: Entity | undefined; m: string } = $props();
	console.log(entity);
</script>

{entity?.id}
{m}
{#if !entity || !entity.type}
	<LoadingSpinner></LoadingSpinner>
{:else if entity.type === 'statement'}>
	<RecommendationStatement statementId={entity.id} />
{:else if entity.type === 'connection'}
	<RecommendationConnection connectionId={entity.id} />
	<!-- {:else if entity.type === 'duplication'} -->
{/if}
