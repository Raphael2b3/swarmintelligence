<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	let { previousWidget, currentWidget, nextWidget, onLoadNext, onLoadPrevious } = $props();

	let scrollDiv: HTMLDivElement;
	let previosContainer: HTMLDivElement;
	let currentContainer: HTMLDivElement;
	let nextContainer: HTMLDivElement;
	
	const intersectingHandler = (
		entries: IntersectionObserverEntry[],
		observer: IntersectionObserver
	) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.id === 'prev' && counter > 0) {
					counter--;
					onLoadPrevious();
				} else if (entry.target.id === 'next') {
					counter++;
					onLoadNext();
				}
			}
		});
	};
	
	const snapToMid = ()=>{
		
		currentContainer.scrollIntoView({ behavior: false ? 'instant' : 'smooth' });
	}
	const scrollToNext = ()=>{
		nextContainer.scrollIntoView({ behavior: 'smooth' });
	}
	onMount(() => {
		let observer = new IntersectionObserver(intersectingHandler, {
			root: scrollDiv,
			threshold: 1,
			rootMargin: '0.2px 90% 0.2px 90%'
		});
		observer.observe(previosContainer);
		observer.observe(nextContainer);
	
	});
	onDestroy(() => {
		observer.disconnect();
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
