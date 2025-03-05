<script lang="ts">
	import * as Statement from '$lib/features/statement/';
	import * as Connection from '$lib/features/connection/';
	import * as Duplication from '$lib/features/duplication/';

	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/shared/state/entities.svelte';
	import { uistate } from '$lib/shared/state/searchmode.svelte';

	let randint: number = $state(0);

	const statement = getFallbackStatement();
	const connection = {
		...getFallbackConnection(),
		thesis: statement,
		argument: statement
	};
	const duplication = {
		...getFallbackDuplication(),
		statementA: statement,
		statementB: statement
	};
</script>

<div class="flex h-full w-full justify-center">
	{#if !uistate.searching}
		{#if randint === 0}
			<Statement.Default {statement} />
		{:else if randint === 1}
			<Connection.Recommendation {connection} />
		{:else}
			<Duplication.Recommendation {duplication} />
		{/if}
	{:else}
		<div style="overflow-y: scroll; padding-right:3rem; padding-left: 3rem; padding-bottom: 3rem;">
			<div style="display:flex; flex-direction: column; gap: 1rem;">
				{#each [0, 0, 0, 0, 0] as element}
					<Statement.SearchResultOnlyText {statement} />
					<Connection.SearchResult {connection} />
					<Duplication.SearchResult {duplication} />
				{/each}
				<button onclick={() => console.log('')}>Didnt find what you wanted? Create it</button>
			</div>
		</div>
	{/if}
</div>
