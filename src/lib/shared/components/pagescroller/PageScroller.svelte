<script lang="ts">
	import { createRawSnippet, onMount, type Snippet } from 'svelte';

	let { pageBuilder, dataProxy } = $props();

	let center: HTMLElement | undefined = $state();
	// scrollPosition:
	// -1 means previous is fully visible,
	// 0 means current is fully visible,
	// 1 means next is fully visible
	const handleScroll = (e: any) => {
		center?.scrollTo();
		const tmp = previous;
		previous = current;
		current = next;
		next = tmp;
	};
	const s1 = {
		render: () => '<div id="previous" class=" h-full w-full snap-end bg-red-500"></div>'
	};
	const s2 = {
		render: () => '<div id="current" class="current h-full w-full snap-end bg-green-600"></div>'
	};
	const s3 = {
		render: () => '<div id="next" class="next h-full w-full snap-end bg-blue-400"></div>'
	};
	let current = $state(createRawSnippet(() => s1));
	let previous = $state(createRawSnippet(() => s2));
	let next = $state(createRawSnippet(() => s3));
</script>

<div
	onwheelcapture={() => {
		console.log('wheel');
	}}
	onscrollend={handleScroll}
	class=" h-full snap-y snap-mandatory overflow-auto"
>
	{@render current()}
	<div bind:this={center}></div>
	{@render previous()}

	{@render next()}
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
