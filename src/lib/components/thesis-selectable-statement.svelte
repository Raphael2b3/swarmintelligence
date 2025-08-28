<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/types';
	import { getFallbackStatement } from '$lib/providers/entities.svelte';
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
