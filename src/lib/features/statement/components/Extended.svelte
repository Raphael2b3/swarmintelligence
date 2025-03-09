<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	import type { IEntityInteraction, IStatement } from '$lib/types';

	let { statement }: { statement: IStatement; userInteraction: IEntityInteraction } = $props();
</script>

<div class="flex h-full flex-col justify-around">
	<div class="flex flex-col gap-1">
		{statement.text}
		<Separator />
	</div>
	<div class="bg- flex flex-col justify-around gap-4">
		<div class="flex flex-row justify-center gap-7">
			<Button variant="outline"><Icon icon="mdi:dislike">False</Icon></Button>
			<Button><Icon icon="mdi:like">True</Icon></Button>
		</div>
	</div>
</div>
