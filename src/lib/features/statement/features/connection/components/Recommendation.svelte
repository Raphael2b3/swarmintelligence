<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Statement } from '$lib/features/statement/statement.svelte';
	import type { Connection } from '../connection.svelte';

	let { connection }: { connection: Connection } = $props();
	let thesis = Statement.get(connection.thesisId!);
	let argument = Statement.get(connection.argumentId!);

	let value = $state(0.5);
	let value_indicator = $derived((value * 100).toFixed(2) + '%');
	const arg_type_str = connection.pro ? 'Pro' : 'Contra';
</script>

{#if thesis && argument}
	<div class="flex h-full w-full flex-col items-center justify-around p-2">
		<div class="flex flex-col gap-1">
			{thesis.text}
			<Separator />
			<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
		</div>

		<div class="flex flex-col gap-1">
			{argument.text}
			<Separator />
			<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
		</div>
	</div>
{:else}
	Something went wrong
{/if}
