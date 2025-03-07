<script lang="ts">
	import { createRawSnippet, onMount, type Snippet } from 'svelte';
	import * as Statement from '$lib/features/statement';
	import { statements } from '$lib/database/statements/data';
	let { pageBuilder, dataProxy } = $props();

	let center: HTMLElement | undefined = $state();
	// scrollPosition:
	// -1 means previous is fully visible,
	// 0 means current is fully visible,
	// 1 means next is fully visible
	let dontScroll = false;
	const handleScroll = (e: any) => {
		if (dontScroll) return;
		const tmp = previous;
		previous = current;
		current = next;
		next = tmp;
	};

	const s1 = {
		render: () => '<div id="previous" class=" h-full w-full snap-end bg-amber-100">Element1</div>'
	};
	const s2 = {
		render: () =>
			'<div id="current" class="current h-full w-full snap-end bg-amber-300">Element2</div>'
	};
	const s3 = {
		render: () => '<div id="next" class="next h-full w-full snap-end bg-amber-500">Element3</div>'
	};
	let current = $state(statements[0]);
	let previous = $state(statements[2]);
	let next = $state(statements[4]);
</script>

<div
	onwheelcapture={() => {
		console.log('wheel');
	}}
	onscrollend={handleScroll}
	class="h-full snap-y snap-mandatory overflow-auto"
>
	<div class="h-full w-full snap-end">
		<Statement.Recommendation statement={previous}></Statement.Recommendation>
	</div>
	<div bind:this={center} class="h-full w-full snap-end">
		<Statement.Recommendation statement={current}></Statement.Recommendation>
	</div>
	<div class="h-full w-full snap-end">
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
