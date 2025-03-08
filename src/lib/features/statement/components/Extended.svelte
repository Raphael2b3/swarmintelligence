<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import Button from '$lib/shared/components/ui/button/button.svelte';
	import Separator from '$lib/shared/components/ui/separator/separator.svelte';
	import * as Tabs from '$lib/shared/components/ui/tabs';
	import type { IStatement } from '$lib/shared/types';

	let { statement }: { statement: IStatement } = $props();
</script>

<div
	class="h-full w-full snap-y snap-mandatory snap-always flex-col items-center justify-around overflow-auto"
>
	<div class="flex h-full w-full snap-start flex-col items-center p-4">
		<Tabs.Root value="pro" class="flex flex-col items-center">
			<Tabs.List>
				<Tabs.Trigger value="pro">Supported Thesis</Tabs.Trigger>
				<Tabs.Trigger value="con">Opposed Thesis</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="pro"></Tabs.Content>
			<Tabs.Content value="con"></Tabs.Content>
		</Tabs.Root>
	</div>
	<div class="item flex h-full snap-start flex-col items-center p-2">
		<Button variant="ghost"><Icon icon="pajamas:scroll-down">Explore Thesis</Icon></Button>
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
		<Button variant="ghost"><Icon icon="pajamas:scroll-up">Explore Arguments</Icon></Button>
	</div>
	<div class="flex h-full w-full snap-start flex-col items-center p-4">
		<Tabs.Root value="pro" class="flex flex-col items-center">
			<Tabs.List>
				<Tabs.Trigger value="pro">Pro Arguments</Tabs.Trigger>
				<Tabs.Trigger value="con">Contra Arguments</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="pro">Loading</Tabs.Content>
			<Tabs.Content value="con">Loading</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
