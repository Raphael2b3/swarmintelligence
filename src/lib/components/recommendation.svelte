<script lang="ts">
	import LoadingSpinner from '$lib/components/loading-spinner.svelte';
	import StatementRecommendation from './statement-recommendation.svelte';
	import RecommendationConnection from '$lib/components/connection-recommendation.svelte';
	import type { Entity } from '$lib/types/entity';
	let { entity }: { entity: Entity | undefined } = $props();

</script>
{#if !entity || !entity.type}
	<LoadingSpinner></LoadingSpinner>
{:else if entity.type === 'statement'}
	<StatementRecommendation statementId={entity.id} />
{:else if entity.type === 'connection'}
	<RecommendationConnection connectionId={entity.id} />
	<!-- {:else if entity.type === 'duplication'} -->
{/if}
