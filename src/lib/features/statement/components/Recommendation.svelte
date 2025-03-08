<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import Button from '$lib/shared/components/ui/button/button.svelte';
	import Separator from '$lib/shared/components/ui/separator/separator.svelte';
	import type { IStatement } from '$lib/shared/types';

	let { statement }: { statement: IStatement } = $props();
</script>

<div class="flex h-full w-full flex-col items-center justify-around p-2">
	<div class="flex flex-col gap-1">
		{statement.text}
		<Separator />
		<Button variant="link"><Icon icon="material-symbols-light:expand">Show More...</Icon></Button>
	</div>
	<div class="bg- flex flex-col justify-around gap-4">
		<div class="flex flex-row justify-center gap-7">
			<Button variant="outline"><Icon icon="mdi:dislike">False</Icon></Button>
			<Button><Icon icon="mdi:like">True</Icon></Button>
		</div>
	</div>
</div>
