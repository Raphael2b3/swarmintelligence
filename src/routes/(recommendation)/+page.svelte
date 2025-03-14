<script lang="ts">
	import PageScroller from '$lib/components/pagescroller/PageScroller.svelte';
	import RecommendationComponent from '$lib/abstraction/recommendation/Recommendation.svelte';
	import { Recommendation } from '$lib/abstraction/recommendation/controller.svelte';

	const recommendation = new Recommendation();
</script>

<div class="h-full w-full">
	<PageScroller onLoadNext={recommendation.loadNext} onLoadPrevious={recommendation.loadPrevious}>
		{#snippet previousWidget()}
			<RecommendationComponent entity={recommendation.previous!} />
		{/snippet}
		{#snippet currentWidget()}
			<RecommendationComponent entity={recommendation.current!} />
		{/snippet}
		{#snippet nextWidget()}
			<RecommendationComponent entity={recommendation.next!} />
		{/snippet}
	</PageScroller>
</div>
