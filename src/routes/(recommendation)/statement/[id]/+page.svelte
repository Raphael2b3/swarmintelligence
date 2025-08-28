<script lang="ts">
	import { page } from '$app/state';
	import Extended from '$lib/components/statement-extended.svelte';
	import ThesisSearch from '$lib/components/thesis-search.svelte';
	import ArgumentSearch from '$lib/components/argument-search.svelte';
	let id = page.params.id;
</script>

<div class="flex h-full w-full flex-col items-center">
	<ThesisSearch statementId={id}></ThesisSearch>
	<Extended statementId={id}></Extended>
	<ArgumentSearch statementId={id}></ArgumentSearch>
</div>
