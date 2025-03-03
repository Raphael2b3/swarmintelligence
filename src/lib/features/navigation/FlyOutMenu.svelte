<script>
	import { Button } from '$lib/shared/components/ui/button';
	let { open = $bindable(), children } = $props();

	function closeFlyout() {
		open = false;
	}
</script>

{#if open}
	<Button class="backdrop show" onclick={closeFlyout}>Close</Button>
{/if}

<div
	style="position: fixed;
		top: 0;
		left: 0;
		padding-left:10px;
		padding-right:10px;
		diplay:flex;
		gap:5px;
		height: 100%;
		width: 300px;
		z-index: 10;
		display: flex;
		align-items: left;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
         {open ? 'transform: translateX(0);' : ''}"
>
	<Button
		onclick={closeFlyout}
		style="position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;">cancel</Button
	>
	<h5>Menu</h5>
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
