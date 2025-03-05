<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import { Input } from '$lib/shared/components/ui/input';
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

<form onsubmit={doSearch} class="flex flex-row items-center justify-center gap-4">
	<input bind:value placeholder="Search" class="solo-input" />
	<Icon icon="mdi:search" type="submit"></Icon>
</form>
