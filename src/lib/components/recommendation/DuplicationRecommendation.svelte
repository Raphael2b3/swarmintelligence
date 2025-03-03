<script>
	import { getFallbackConnection, getFallbackDuplication } from '$lib/shared/state/entities.svelte';
	import ActionButtonList from '../ActionButtonList.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';

	let { duplication = getFallbackDuplication() } = $props();
</script>

<h5>The Statement</h5>
<ScrollableRichText></ScrollableRichText>

<h5>Is the same as</h5>
<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<div>fav</div>
	<div>share</div>
</ActionButtonList>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<button>Is the Same</button>
	<button>Is different</button>
</div>
