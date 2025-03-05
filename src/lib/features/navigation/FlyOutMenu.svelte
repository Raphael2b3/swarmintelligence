<script>
	let { open = $bindable(), children } = $props();

	function closeFlyout() {
		open = false;
	}
</script>

{#if open}
	<button class="backdrop show" onclick={closeFlyout}>Close</button>
{/if}

<div
	class="fixed top-0 left-0 z-10 flex flex-col bg-white"
	style="transform: translateX({open ? '0' : '-100%'})"
>
	<div class="flex flex-row justify-between">
		<h5>Menu</h5>
		<button onclick={closeFlyout}>Close</button>
	</div>
	{@render children()}
	<!-- Slot für dynamische Inhalte -->
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 9;
		transition: opacity 0.3s ease;
		opacity: 0;
		pointer-events: none;
	}

	.backdrop.show {
		opacity: 1;
		pointer-events: auto;
	}
</style>
