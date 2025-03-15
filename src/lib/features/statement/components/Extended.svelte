<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Statement } from '../statement.svelte';
	import Vote from '../features/connection/features/vote/Vote.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';

	let { statementId }: { statementId: string } = $props();
	let statement = Statement.get(statementId);
</script>

{#if statement}
	<div class="flex h-full flex-col justify-around">
		<div class="flex flex-col gap-1">
			{statement.text}
			<Separator />
		</div>
		<div class="bg- flex flex-col justify-around gap-4">
			<Vote statementId={statement.id} />
		</div>
	</div>
{:else}
	<LoadingSpinner></LoadingSpinner>
{/if}
