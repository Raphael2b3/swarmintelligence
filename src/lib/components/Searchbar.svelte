<script lang="ts">
	import searchSvelte from '../../state/search.svelte';
	let searchQuery = $state('');
	$effect(() => {
		searchSvelte.isActive = searchQuery.length > 0;
	});
</script>

<div class="searchbar">
	<input type="text" placeholder="Search for a topic" bind:value={searchQuery} />
</div>
