<script lang="ts">
	import FilterSettings from '$lib/components/filter-settings.svelte';
	import MainNav from '$lib/components/navigation/main-nav.svelte';
	import MobileNav from '$lib/components/navigation/mobile-nav.svelte';
	import Searchbar from '$lib/components/searchbar.svelte';
	import Icon from '$lib/components/icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode, mode } from 'mode-watcher';

	let { children } = $props();
	let darkMode = $state(true);

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
