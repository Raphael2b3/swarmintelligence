<script>
	let { children, open, title = 'Popup' } = $props();


	function closeFlyout() {
		open = false;
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="backdrop show" onclick={closeFlyout}></div>

	<div
		style="position: fixed;
		top: 9rem;
        left: 9rem;
		height: 60%;
		width: 80%;
		z-index: 10;
		padding-left: 2rem;
		"
	>
		<div
			style="red; width: 100%; display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between"
		>
			<button
				onclick={closeFlyout}
				style="
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;">cancel</button
			>
			<h5>{title}</h5>
		</div>
		{@render children()}
		<!-- Slot für dynamische Inhalte -->
	</div>
{/if}

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
