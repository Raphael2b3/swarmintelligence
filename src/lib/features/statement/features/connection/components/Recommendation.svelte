<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Statement } from '$lib/features/statement/statement.svelte';
	import { Connection } from '../connection.svelte';

	let { connectionId }: { connectionId: string } = $props();
	let connection = Connection.get(connectionId);
	let thesis = Statement.get(connection!.thesisId!);
	let argument = Statement.get(connection!.argumentId!);

	const arg_type_str = connection!.pro ? 'Pro' : 'Contra';
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
