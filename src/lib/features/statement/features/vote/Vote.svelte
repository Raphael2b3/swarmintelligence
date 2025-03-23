<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { votes } from '$lib/features/statement/features/vote/data';
	import { statementVoteController } from './controller.svelte';
	let { statementId } = $props();
	let vote = statementVoteController.getStatementVote(statementId);
</script>

<div class="flex flex-row justify-center gap-7">
	<Button variant="outline" onclick={() => {}}
		><Icon icon="mdi:dislike" icon2="mdi:dislike-outlined" isAlternative={vote.userVote >= 0}
			>False</Icon
		></Button
	>
	<Button
		><Icon icon="mdi:like" icon2="mdi:like-outlined" isAlternative={vote.userVote <= 0}>True</Icon
		></Button
	>
</div>
