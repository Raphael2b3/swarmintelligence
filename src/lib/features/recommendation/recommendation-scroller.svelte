<script lang="ts">
	import PageScroller from '$lib/components/pagescroller/PageScroller.svelte';
	import RecommendationComponent from '$lib/abstraction/entity/Recommendation.svelte';
	import { recommendation } from '$lib/features/recommendation/controller.svelte';
	let _ = $state();
</script>

<PageScroller onLoadNext={recommendation.loadNext} onLoadPrevious={recommendation.loadPrevious}>
	{#snippet previousWidget()}
		<RecommendationComponent m="prev" entity={recommendation.previous} />
	{/snippet}
	{#snippet currentWidget()}
		<RecommendationComponent m="curr" entity={{ id: '1', type: 'statement' }} />
	{/snippet}
	{#snippet nextWidget()}
		<RecommendationComponent m="next" entity={recommendation.next} />
	{/snippet}
</PageScroller>
