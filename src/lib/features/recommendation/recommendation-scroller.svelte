<script lang="ts">
	import PageScroller from '$lib/features/recommendation/PageScroller.svelte';
	import RecommendationComponent from '$lib/abstraction/entity/Recommendation.svelte';
	import { recommendation } from '$lib/features/recommendation/controller.svelte';
</script>

<PageScroller
	onLoadNext={() => recommendation.loadNext()}
	onLoadPrevious={() => recommendation.loadPrevious()}
>
	{#snippet previousWidget()}
		<RecommendationComponent entity={recommendation.previous} />
	{/snippet}
	{#snippet currentWidget()}
		<RecommendationComponent entity={recommendation.current} />
	{/snippet}
	{#snippet nextWidget()}
		<RecommendationComponent entity={recommendation.next} />
	{/snippet}
</PageScroller>
