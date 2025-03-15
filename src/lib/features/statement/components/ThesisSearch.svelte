<script>
	import Icon from '$lib/components/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tabs from '$lib/components/ui/tabs';
	let { statementId } = $props();
	let thesisVisable = $state(false);
</script>

<Button variant="ghost" onclick={() => (thesisVisable = !thesisVisable)}
	><Icon icon="pajamas:scroll-down" icon2="pajamas:scroll-up" isAlternative={thesisVisable}
		>Explore Thesis</Icon
	></Button
>

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
