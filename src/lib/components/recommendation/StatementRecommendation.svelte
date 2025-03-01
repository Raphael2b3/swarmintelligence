<script>
	import { getFallbackStatement } from '$lib/state/entities.svelte';
	import ActionButtonList from '../ActionButtonList.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';
	let { statement = getFallbackStatement() } = $props();
</script>

<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<div>ShowMore</div>
	<div>Favourite</div>
	<div>Share</div>
	<div>Connect</div>
	<div>OpenDetails</div>
</ActionButtonList>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<button>False</button>
	<button>True</button>
</div>
