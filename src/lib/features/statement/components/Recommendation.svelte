<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import Separator from '$lib/shared/components/ui/separator/separator.svelte';
	import type { IStatement } from '$lib/shared/types';

	let { statement }: { statement: IStatement } = $props();
</script>

<div>
	{statement.text}
	<Separator orientation="horizontal" />
	<Icon icon="proicons:more">ShowMore</Icon>
	<Icon icon="mdi:favourite">Favourite</Icon>
	<Icon icon="material-symbols:share">Share</Icon>
	<Icon icon="hugeicons:connect">Connect</Icon>
	<Icon icon="majesticons:open">OpenDetails</Icon>
	<div class="flex flex-row items-center gap-1">
		<Icon icon="mdi:dislike">False</Icon>
		<Icon icon="mdi:like">True</Icon>
	</div>
</div>
