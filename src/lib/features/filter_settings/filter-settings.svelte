<script lang="ts">
	import CheckBoxGroup from '$lib/shared/components/CheckBoxGroup.svelte';
	import Select from '$lib/shared/components/Select.svelte';
	import Button from '$lib/shared/components/ui/button/button.svelte';
	import type { IFilterOptions } from '$lib/shared/types';
	import * as Dialog from '$lib/shared/components/ui/dialog/index.js';
	import { Input } from '$lib/shared/components/ui/input/index.js';
	import { Label } from '$lib/shared/components/ui/label/index.js';
	import { buttonVariants } from '$lib/shared/components/ui/button';
	import Icon from '$lib/shared/components/Icon.svelte';
	// Functions
	import { filterOptions as options } from '$lib/shared/state/filterOptions.svelte';
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
		{ value: 'asc', label: 'Ascending' },
		{ value: 'desc', label: 'Descending' }
	];

	// Logic
	$effect(() => {
		options.tags = options._tagstring?.split(' ');
	});

	let previewtext = $derived(
		`${options.controversial ? 'Controversial, ' : ''}` +
			`Truth ${options.sortByTruth}, ` +
			`Votes ${options.sortByVotes}, ` +
			`${options.tags} ` +
			`${options.entitytype}`
	);

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

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' }) + 'flex gap-1 align-baseline'}
		>Open Filter <Icon icon="flowbite:filter-outline"></Icon></Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Filter Settings</Dialog.Title>
			<Dialog.Description>
				Setup the Settings what Recommendation Algorithm should be used.
			</Dialog.Description>
		</Dialog.Header>
		<div style="display:flex; gap: 3px; flex-direction: column;">
			<Button
				variant="secondary"
				onclick={onClear}
				class="flex w-fit justify-center gap-1 align-baseline"
				>Clear Filter <Icon icon="lucide:delete"></Icon>
			</Button>
			<div>
				Controversial Only
				<input type="checkbox" bind:checked={options.controversial} />
			</div>
			Entities
			<CheckBoxGroup bind:group={options.entitytype} options={checkBoxOptions}></CheckBoxGroup>
			<div style="display: flex; flex-direction: row;">
				<Select label="Sort by Truth" bind:value={options.sortByTruth} options={sortdirections}
				></Select>
				<Select label="Sort by Popularity" bind:value={options.sortByVotes} options={sortdirections}
				></Select>
			</div>
			Tags
			<input type="text" bind:value={options._tagstring} placeholder="tag1 tag2" />
		</div>
		<Dialog.Footer>
			<Button type="submit">Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
