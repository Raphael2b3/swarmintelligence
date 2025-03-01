<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import Flyout from '$lib/components/Flyout.svelte';
	import Kok from '$lib/components/Kok.svelte';
	let { children } = $props();
	let expanded = $state(false);
</script>

<Kok></Kok>
<ParaglideJS {i18n}>
	<div>
		<div style="direction: ltr; justify-content: space-between; display: flex;">
			<button onclick={() => (expanded = !expanded)}>Burger</button>
			<Searchbar></Searchbar>
		</div>
		<div style="direction: ltr; justify-content: space-between; display: flex;">
			{#if expanded}
				<Flyout></Flyout>
			{/if}
			{@render children()}
		</div>
	</div>
</ParaglideJS>
