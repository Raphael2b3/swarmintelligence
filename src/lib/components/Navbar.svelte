<script>
	import Searchbar from './Searchbar.svelte';
	let { onMenuClick, onSearch } = $props();
</script>

<div style="width: 100%; flex-direction: row; display: flex; padding: 5px; ">
	<button onclick={onMenuClick}>burger</button>
	<div style="width:100%">
		<Searchbar></Searchbar>
	</div>
</div>
