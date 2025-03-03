<script lang="ts">
	import { getFallbackConnection, getFallbackDuplication } from '$lib/shared/state/entities.svelte';
	import type { IDuplicationExtended } from '../types';
	let { duplication }: { duplication: IDuplicationExtended } = $props();
</script>

<h5>The Statement</h5>
{duplication.statementA.text}
<h5>Is the same as</h5>
{duplication.statementB.text}

<button>fav</button>
<button>share</button>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<button>Is the Same</button>
	<button>Is different</button>
</div>
