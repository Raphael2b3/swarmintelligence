<script lang="ts">
	import Icon from '$lib/components/icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Vote } from '$lib/providers/statement-vote-provider.svelte';
	let { statementId } = $props();
	let vote = $derived(Vote.get(statementId, 'user1'));
</script>

<div class="flex flex-row justify-center gap-7">
	<Button variant="outline" onclick={()=>vote.negativeToggle()}
		><Icon icon="mdi:dislike" icon2="mdi:dislike-outline" isAlternative={vote.value >= 0}
			>False</Icon
		></Button
	>
	<Button variant="outline" onclick={()=>vote.positiveToggle()}
		><Icon icon="mdi:like" icon2="mdi:like-outline" isAlternative={vote.value <= 0}>True</Icon
		></Button
	>
</div>
