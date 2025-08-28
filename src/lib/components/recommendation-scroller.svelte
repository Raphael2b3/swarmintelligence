<script lang="ts">
	import PageScroller from '$lib/components/page-scroller.svelte';
	import Recommendation from "$lib/components/recommendation.svelte"
	import { recommendationController } from '$lib/providers/recommendation-controller-provider.svelte';
	
</script>

<PageScroller
	onNext={() => recommendationController.loadNext()}
	onPrevious={() => recommendationController.loadPrevious()}
>
	{#snippet previousWidget()}
		<Recommendation entity={recommendationController.previous} />
	{/snippet}
	{#snippet currentWidget()}
		<Recommendation entity={recommendationController.current} />
	{/snippet}
	{#snippet nextWidget()}
		<Recommendation entity={recommendationController.next} />
	{/snippet}
</PageScroller>
