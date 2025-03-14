<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Statement } from '../statement.svelte';
	import Vote from '../features/vote/Vote.svelte';

	let { statement }: { statement: Statement } = $props();
</script>

<div class="flex h-full w-full flex-col items-center justify-around p-2">
	<div class="flex flex-col gap-1">
		{statement.text}
		<Separator />
		<Button variant="link" href="/statement/{statement.id}"
			><Icon icon="material-symbols-light:expand">Show More...</Icon></Button
		>
	</div>
	<div class="bg- flex flex-col justify-around gap-4">
		<Vote statementId={statement.id} />
	</div>
</div>
