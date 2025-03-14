<script lang="ts">
	import { page } from '$app/state';
	import Extended from '$lib/features/statement/components/Extended.svelte';
	import { Statement as Controller } from '$lib/features/statement/statement.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	let id = page.params.id;
	let statement = Controller.get(id);

	let thesisVisable = $state(false);
	let argumentVisable = $state(false);
	$effect(() => {});
</script>

<div class="flex h-full w-full flex-col items-center">
	{#if thesisVisable}
		<Tabs.Root value="pro" class="flex h-5/6 flex-col items-center ">
			<Tabs.List>
				<Tabs.Trigger value="pro">Supported Thesis</Tabs.Trigger>
				<Tabs.Trigger value="con">Opposed Thesis</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="pro"></Tabs.Content>
			<Tabs.Content value="con"></Tabs.Content>
		</Tabs.Root>
	{/if}
	<Button variant="ghost" onclick={() => (thesisVisable = !thesisVisable)}
		><Icon icon="pajamas:scroll-down" icon2="pajamas:scroll-up" isAlternative={thesisVisable}
			>Explore Thesis</Icon
		></Button
	>
	{#if statement}
		<Extended {statement}></Extended>
	{:else}
		Not Found
	{/if}

	<Button variant="ghost" onclick={() => (argumentVisable = !argumentVisable)}
		><Icon icon="pajamas:scroll-up" icon2="pajamas:scroll-down" isAlternative={argumentVisable}
			>Explore Arguments</Icon
		></Button
	>
	{#if argumentVisable}
		<Tabs.Root value="pro" class="flex flex-col items-center">
			<Tabs.List>
				<Tabs.Trigger value="pro">Pro Arguments</Tabs.Trigger>
				<Tabs.Trigger value="con">Contra Arguments</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="pro">Loading</Tabs.Content>
			<Tabs.Content value="con">Loading</Tabs.Content>
		</Tabs.Root>
	{/if}
</div>
