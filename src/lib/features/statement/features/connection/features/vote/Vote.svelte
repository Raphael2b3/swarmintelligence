<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Vote } from './controller.svelte';
	let { statementId } = $props();
	let vote = Vote.get(statementId, 'user1');
</script>

<div class="flex flex-row justify-center gap-7">
	<Button variant="outline" onclick={vote.negativeToggle}
		><Icon icon="mdi:dislike" icon2="mdi:dislike-outlined" isAlternative={vote.value >= 0}
			>False</Icon
		></Button
	>
	<Button onclick={vote.positiveToggle}
		><Icon icon="mdi:like" icon2="mdi:like-outlined" isAlternative={vote.value <= 0}>True</Icon
		></Button
	>
</div>
