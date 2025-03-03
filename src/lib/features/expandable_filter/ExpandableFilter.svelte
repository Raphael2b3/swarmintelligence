<script lang="ts">
	import CheckBoxGroup from '$lib/shared/components/CheckBoxGroup.svelte';
	import Select from '$lib/shared/components/Select.svelte';
	import type { IFilterOptions } from '$lib/shared/types';
	let { options = $bindable() }: { options: IFilterOptions } = $props();

	// Functions
	function setDefaultOptions() {
		options['controversial'] = false;
		options['sortByTruth'] = 'asc';
		options['sortByVotes'] = 'asc';
		options['tags'] = [];
		options['entitytype'] = [];
		options['_tagstring'] = '';
	}

	function onClear() {
		setDefaultOptions();
	}

	const sortdirections = [
		{ value: 'asc', name: 'Ascending' },
		{ value: 'desc', name: 'Descending' }
	];

	// Logic
	$effect(() => {
		options.tags = options._tagstring?.split(' ');
	});

	let previewtext = $derived(
		`Controversial: ${options.controversial}, ` +
			`Sort by Truth: ${options.sortByTruth}, ` +
			`Sort by Votes: ${options.sortByVotes}, ` +
			`Tags: ${options.tags}, ` +
			`Entitytype: ${options.entitytype}, ` +
			`Sort by Truth: ${options.sortByTruth}, ` +
			`Sort by Votes: ${options.sortByVotes}, ` +
			`Entitytype: ${options.entitytype}`
	);

	let expanded = $state(false);

	let checkBoxOptions = [
		{
			label: 'Statement',
			value: 'statement'
		},
		{
			label: 'Connection',
			value: 'connection'
		},
		{
			label: 'Duplication',
			value: 'duplication'
		}
	];
</script>

<button onclick={() => (expanded = !expanded)}>Expand</button>
{#if !expanded}
	{previewtext}
{:else}
	<div style="display:flex; gap: 3px; flex-direction: column;">
		<button onclick={onClear}>Clear Filter</button>
		<input type="checkbox" bind:checked={options.controversial} title="Controversial Only" />

		Entities
		<CheckBoxGroup bind:group={options.entitytype} options={checkBoxOptions}></CheckBoxGroup>
		<div style="display: flex; flex-direction: row;">
			<Select label="Sort by Truth" bind:value={options.sortByTruth} options={sortdirections}
			></Select>
			<Select label="Sort by Popularity" bind:value={options.sortByVotes} options={sortdirections}
			></Select>
		</div>
		Tags
		<input type="text" bind:value={options._tagstring} title="Tags" />
	</div>
{/if}
