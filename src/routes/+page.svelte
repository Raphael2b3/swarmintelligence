<script lang="ts">
	import Kok from '$lib/components/Kok.svelte';
	import counterObj from '../state/counter.svelte';
	import searchSvelte from '../state/search.svelte';
</script>

{searchSvelte.isActive ? 'Searching' : 'Recommendations'}
<Kok></Kok>

{counterObj.counter}
