<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	import ConnectButton from '../buttons/iconbuttons/ConnectButton.svelte';
	import { getFallbackStatement } from '$lib/state/entities.svelte';

	let { statement = getFallbackStatement() }: { statement: IStatement } = $props();
</script>

<div style="display: flex; flex-direction: row;">
	<div>{statement.text}</div>
	<ConnectButton></ConnectButton>
</div>
