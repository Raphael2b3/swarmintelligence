<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { uistate } from '$lib/state/searchmode.svelte';

	let value = $state('');
	$effect(() => {
		uistate.searching = value !== '';
	});
	function doSearch(event: Event) {
		alert('Search for ' + value);
		event.preventDefault();
	}
</script>

<form onsubmit={doSearch} class="flex w-full flex-row items-center justify-center p-1.5">
	<Input
		bind:value
		placeholder="Search"
		class="solo-input"
		style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
	/>
	<Button style="border-top-left-radius: 0; border-bottom-left-radius: 0;" type="submit" size="icon"
		><Icon icon="mdi:search"></Icon></Button
	>
</form>
