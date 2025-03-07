<script lang="ts">
	import { createRawSnippet, onMount, type Snippet } from 'svelte';
	import * as Statement from '$lib/features/statement';
	import { statements } from '$lib/database/statements/data';
	import { on } from 'svelte/events';
	let { pageBuilder, dataProxy } = $props();

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
				if (entry.target.id === 'prev') {
					const tmp = next;
					next = current;
					current = previous;
					previous = tmp;
				} else if (entry.target.id === 'next') {
					const tmp = previous;
					previous = current;
					current = next;
					next = tmp;
				}
				currentContainer.scrollIntoView({ behavior: 'instant' });
			}
		});
	};
	onMount(() => {
		let observer = new IntersectionObserver(intersectingHandler, {
			root: scrollDiv,
			threshold: 1
		});
		observer.observe(previosContainer);
		observer.observe(nextContainer);
	});

	let current = $state(statements[0]);
	let previous = $state(statements[2]);
	let next = $state(statements[4]);
</script>

<div
	bind:this={scrollDiv}
	class="no-scrollbar h-full snap-y snap-mandatory snap-always overflow-auto"
>
	<div bind:this={previosContainer} id="prev" class="h-full w-full snap-end">
		<Statement.Recommendation statement={previous}></Statement.Recommendation>
	</div>
	<div bind:this={currentContainer} id="curr" class="h-full w-full snap-end">
		<Statement.Recommendation statement={current}></Statement.Recommendation>
	</div>
	<div bind:this={nextContainer} id="next" class="h-full w-full snap-end">
		<Statement.Recommendation statement={next}></Statement.Recommendation>
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
