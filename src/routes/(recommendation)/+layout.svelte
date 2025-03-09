<script lang="ts">
	import FilterSettings from '$lib/features/filter_settings/filter-settings.svelte';
	import MainNav from '$lib/features/navigation/main-nav.svelte';
	import MobileNav from '$lib/features/navigation/mobile-nav.svelte';
	import Searchbar from '$lib/features/searchbar/Searchbar.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	let { children } = $props();
	let darkMode = $state(true);
	let headerElement: HTMLElement | undefined = $state();
	let content: HTMLElement | undefined = $state();

	mode.subscribe((value) => {
		darkMode = value === 'dark';
	});
</script>

<header
	class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 top-0 w-full border-b backdrop-blur"
>
	<nav class="flex w-full flex-row items-center justify-between gap-1.5 p-1.5">
		<MobileNav></MobileNav>
		<MainNav></MainNav>
		<Searchbar></Searchbar>

		<FilterSettings />
		<Button onclick={toggleMode} variant="outline" size="icon" class="aspect-square">
			<Icon
				isAlternative={darkMode}
				icon="mdi:weather-night"
				icon2="mdi:weather-sunny"
				class="h-[1.2rem] w-[1.2rem] scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</nav>
</header>

{@render children()}
