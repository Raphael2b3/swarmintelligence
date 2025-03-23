<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { pageScrollController } from './pageScrollController.svelte';
	let {
		previousWidget,
		currentWidget,
		nextWidget,
		onNext,
		onPrevious
	}: {
		previousWidget: () => any;
		currentWidget: () => any;
		nextWidget: () => any;
		onNext: () => void;
		onPrevious: () => void;
	} = $props();

	let scrollDiv: HTMLDivElement,
		previosContainer: HTMLDivElement,
		currentContainer: HTMLDivElement,
		nextContainer: HTMLDivElement;

	onMount(() => {
		pageScrollController.initCallbacks(onNext, onPrevious);
		pageScrollController.initObserver(scrollDiv, previosContainer, currentContainer, nextContainer);

		console.log('PageScroller mounted');
	});

	onDestroy(() => {
		pageScrollController.release();

		console.log('PageScroller Released');
	});
</script>

<!-- the scroll div needs a badding because the Intersection Provider may not work properly  -->
<div
	bind:this={scrollDiv}
	class="no-scrollbar h-full w-full snap-y snap-mandatory snap-always overflow-y-scroll p-0.5"
>
	<div bind:this={previosContainer} id="prev" class="h-full w-full snap-end">
		{@render previousWidget()}
	</div>
	<div bind:this={currentContainer} id="curr" class="h-full w-full snap-end">
		{@render currentWidget()}
	</div>
	<div bind:this={nextContainer} id="next" class="h-full w-full snap-end">
		{@render nextWidget()}
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
