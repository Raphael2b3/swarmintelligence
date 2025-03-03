<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/shared/types';
	import { getFallbackStatement } from '$lib/shared/state/entities.svelte';
	import { Button } from './ui/button';
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
	<Button onclick={onContraSelected}>Select As Opposed Thesis</Button>
	<Button onclick={onProSelected}>Select As Supported Thesis</Button>
</div>
