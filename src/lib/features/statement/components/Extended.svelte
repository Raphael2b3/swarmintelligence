<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Statement } from '../statement.svelte';
	import Vote from '../features/vote/Vote.svelte';

	let { statement }: { statement: Statement } = $props();
</script>

<div class="flex h-full flex-col justify-around">
	<div class="flex flex-col gap-1">
		{statement.text}
		<Separator />
	</div>
	<div class="bg- flex flex-col justify-around gap-4">
		<Vote statementId={statement.id} />
	</div>
</div>
