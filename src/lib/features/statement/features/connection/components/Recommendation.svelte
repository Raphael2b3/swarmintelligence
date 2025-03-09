<script lang="ts">
	import type { IConnection } from '$lib/types';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let { connection }: { connection: IConnection } = $props();

	let value = $state(0.5);
	let value_indicator = $derived((value * 100).toFixed(2) + '%');
	const arg_type_str = connection.isProArgument ? 'Pro' : 'Contra';
</script>

<div class="flex h-full w-full flex-col items-center justify-around p-2">
	<div class="flex flex-col gap-1">
		{connection.thesis.text}
		<Separator />
		<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
	</div>
	This is Actually a good {arg_type_str} Argument
	<div class="flex flex-col items-center gap-1">
		{value_indicator}
		<div class="flex w-full items-center">
			bad
			<input type="range" bind:value step="0.001" min="0" max="1" />
			good
		</div>
	</div>
	<div class="flex flex-col gap-1">
		{connection.argument.text}
		<Separator />
		<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
	</div>
</div>
