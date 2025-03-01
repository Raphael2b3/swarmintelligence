<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import { getFallbackStatement } from '$lib/state/entities.svelte';
	let { statement = getFallbackStatement() }: { statement: IStatement } = $props();

	function onContraSelected() {
		console.log('Contra selected');
	}
	function onProSelected() {
		console.log('Pro selected');
	}
</script>

<div style="flex-direction: row;">
	<div class="outline-1">{statement.text}</div>
	<button onclick={onContraSelected}>Select as Contra Argument</button>
	<button onclick={onProSelected}>Select as Pro Argument</button>
</div>
