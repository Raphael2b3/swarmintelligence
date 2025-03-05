<script lang="ts">
	import { uistate } from '$lib/shared/state/searchmode.svelte';

	let value = $state('');
	$effect(() => {
		uistate.searching = value !== '';
	});
	function doSearch(event: Event) {
		alert('Search for ' + value);
		event.preventDefault();
	}
</script>

<form onsubmit={doSearch}>
	<i>search</i>
	<input bind:value placeholder="Search" class="solo-input" />
	<button disabled={value === ''}> Arrow Forward </button>
</form>
