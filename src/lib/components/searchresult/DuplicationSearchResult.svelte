<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getEntity, getFallbackDuplication } from '$lib/state/entities.svelte';

	let { duplication = getFallbackDuplication() }: { duplication: IDuplication } = $props();

	let a = getEntity(duplication.statementA, 'statement') as IStatement;
	let b = getEntity(duplication.statementB, 'statement') as IStatement;
</script>

<div>
	<div>{a.text}</div>
	equal to
	<div>{b.text}</div>
</div>
