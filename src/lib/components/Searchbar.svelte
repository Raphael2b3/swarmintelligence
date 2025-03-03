<script lang="ts">
	import { setSearchmode } from '$lib/shared/state/searchmode.svelte';

	let value = $state('');
	$effect(() => {
		setSearchmode(value !== '');
	});
	function doSearch(event: Event) {
		alert('Search for ' + value);
		event.preventDefault();
	}
</script>

<form
	onsubmit={doSearch}
	style="
		display: flex;
		justify-content: center;
		align-items: center;
		
		"
>
	<div class="solo-paper shadow-2xl">
		<i>search</i>
		<input bind:value placeholder="Search" class="solo-input" />
	</div>
	<button disabled={value === ''} color="primary" class="solo-fab">
		<i class="material-icons">arrow_forward</i>
	</button>
</form>

<style>
	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 0 12px;
		height: 48px;
	}
	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}
	* :global(.solo-input) {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface, #ffffff);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface, #ffffff);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
