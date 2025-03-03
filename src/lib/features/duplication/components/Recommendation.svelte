<script lang="ts">
	import { getFallbackConnection, getFallbackDuplication } from '$lib/shared/state/entities.svelte';

	import { Button } from '$lib/shared/components/ui/button';
	import type { IDuplicationExtended } from '../types';
	let { duplication }: { duplication: IDuplicationExtended } = $props();
</script>

<h5>The Statement</h5>
{duplication.statementA.text}
<h5>Is the same as</h5>
{duplication.statementB.text}

<Button>fav</Button>
<Button>share</Button>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<Button>Is the Same</Button>
	<Button>Is different</Button>
</div>
