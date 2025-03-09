<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { IEntityInteraction, IStatement } from '$lib/types';

	let {
		statement,
		interaction = $bindable()
	}: { statement: IStatement; interaction: IEntityInteraction } = $props();
</script>

<div class="flex h-full w-full flex-col items-center justify-around p-2">
	<div class="flex flex-col gap-1">
		{statement.text}
		<Separator />
		<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
	</div>
	<div class="bg- flex flex-col justify-around gap-4">
		<div class="flex flex-row justify-center gap-7">
			<Button variant="outline" onclick={() => {}}
				><Icon
					icon="mdi:dislike"
					icon2="mdi:dislike-outlined"
					isAlternative={interaction.userVote >= 0}>False</Icon
				></Button
			>
			<Button
				><Icon icon="mdi:like" icon2="mdi:like-outlined" isAlternative={interaction.userVote <= 0}
					>True</Icon
				></Button
			>
		</div>
	</div>
</div>
