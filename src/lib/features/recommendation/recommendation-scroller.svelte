<script lang="ts">
	import RecommendationComponent from '$lib/abstraction/entity/Recommendation.svelte';
	import PageScroller from '$lib/components/page-scroller/PageScroller.svelte';
	import { recommendationController } from '$lib/features/recommendation/recommendationController.svelte';
	import { onMount } from 'svelte';
	onMount;
</script>

<PageScroller
	onNext={() => recommendationController.loadNext()}
	onPrevious={() => recommendationController.loadPrevious()}
>
	{#snippet previousWidget()}
		<RecommendationComponent entity={recommendationController.previous} />
	{/snippet}
	{#snippet currentWidget()}
		<RecommendationComponent entity={recommendationController.current} />
	{/snippet}
	{#snippet nextWidget()}
		<RecommendationComponent entity={recommendationController.next} />
	{/snippet}
</PageScroller>
