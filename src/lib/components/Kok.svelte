<script lang="ts">
	import counterObj from '../../state/counter.svelte';
	import searchSvelte from '../../state/search.svelte';
</script>

{searchSvelte.results}

<button onclick={() => counterObj.counter++}>Increase</button>
