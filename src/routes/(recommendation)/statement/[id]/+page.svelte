<script lang="ts">
	import { page } from '$app/state';
	import Extended from '$lib/features/statement/components/Extended.svelte';
	import ThesisSearch from '$lib/features/statement/components/ThesisSearch.svelte';
	import ArgumentSearch from '$lib/features/statement/components/ArgumentSearch.svelte';
	let id = page.params.id;
</script>

<div class="flex h-full w-full flex-col items-center">
	<ThesisSearch statementId={id}></ThesisSearch>
	<Extended statementId={id}></Extended>
	<ArgumentSearch statementId={id}></ArgumentSearch>
</div>
