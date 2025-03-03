<script lang="ts">
	import ExpandableFilter from '$lib/features/expandable_filter/ExpandableFilter.svelte';
	import { Statement } from '$lib/features/statement/index.svelte';
	import { Connection } from '$lib/features/connection/index.svelte';
	import { Duplication } from '$lib/features/duplication/index.svelte';
	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/shared/state/entities.svelte';
	import { pisse } from '$lib/shared/state/searchmode.svelte';
	import type { IFilterOptions } from '$lib/shared/types';
	import { Button } from '$lib/shared/components/ui/button';

	let filterOptions: IFilterOptions = $state({
		entitytype: ['statement'],
		controversial: true,
		sortByTruth: 'asc',
		sortByVotes: 'desc',
		tags: ['foo'],
		_tagstring: ''
	});
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

<ExpandableFilter options={filterOptions} />

<Button
	onclick={() => {
		randint = (randint + 1) % 3;
	}}>Refresh</Button
>
<div
	style="flex:1; display:flex; flex-direction: column; justify-content: space-around;  height:0;"
>
	{#if !pisse.searching}
		<div
			style="flex:1; display:flex; flex-direction: column; justify-content: space-around;  padding-right:3rem; padding-left: 3rem; padding-bottom: 3rem;"
		>
			{#if randint === 0}
				<Statement.Recommendation {statement} />
			{:else if randint === 1}
				<Connection.Recommendation {connection} />
			{:else}
				<Duplication.Recommendation {duplication} />
			{/if}
		</div>
	{:else}
		<div style="overflow-y: scroll; padding-right:3rem; padding-left: 3rem; padding-bottom: 3rem;">
			<div style="display:flex; flex-direction: column; gap: 1rem;">
				{#each [0, 0, 0, 0, 0] as element}
					<Statement.SearchResultOnlyText {statement} />
					<Connection.SearchResult {connection} />
					<Duplication.SearchResult {duplication} />
				{/each}
				<Button onclick={() => console.log('')}>Didnt find what you wanted? Create it</Button>
			</div>
		</div>
	{/if}
</div>
