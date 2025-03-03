<script lang="ts">
	import { accordion } from '$lib/shared/animations/accordion';
	let expanded = $state(false);
	let { children } = $props();
</script>

<div class="container">
	<div
		use:accordion={expanded}
		style=" 
				display: flex; 
				flex-direction: column; 
				overflow: hidden;"
	>
		{@render children()}
	</div>

	<button onclick={() => (expanded = !expanded)}>expand</button>
	<!-- Slot für dynamische Inhalte -->

	<!-- Slot für dynamische Inhalte -->
</div>

<style>
	.container {
		position: absolute;
		/* background-color: rgba(148, 148, 148, 0.269); */
		background-color: rgba(180, 180, 180, 0.304);
		border-radius: 10000rem;
		bottom: 15rem;
		right: 3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end; /* Abstand zwischen den Items */
		z-index: 10; /* Stellt sicher, dass die Liste über dem Inhalt liegt */
		transition: height 200ms;
		overflow: hidden;
	}
</style>
