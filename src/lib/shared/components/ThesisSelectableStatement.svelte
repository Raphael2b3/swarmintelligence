<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/shared/types';
	import { getFallbackStatement } from '$lib/shared/state/entities.svelte';
	let { statement = getFallbackStatement() }: { statement: IStatement } = $props();

	function onContraSelected() {
		console.log('Contra selected');
	}
	function onProSelected() {
		console.log('Pro selected');
	}
</script>

<div style="flex-direction: row;">
	<div>{statement.text}</div>
	<button onclick={onContraSelected}>Select As Opposed Thesis</button>
	<button onclick={onProSelected}>Select As Supported Thesis</button>
</div>
