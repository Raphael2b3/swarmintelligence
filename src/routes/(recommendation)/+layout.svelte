<script>
	import FilterSettings from '$lib/features/filter_settings/filter-settings.svelte';
	import MainNav from '$lib/features/navigation/main-nav.svelte';
	import MobileNav from '$lib/features/navigation/mobile-nav.svelte';
	import Searchbar from '$lib/features/searchbar/Searchbar.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { Button } from '$lib/shared/components/ui/button';
	import { toggleMode } from 'mode-watcher';

	let { children } = $props();
</script>

<div class="flex h-full w-full flex-col">
	<header
		class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
	>
		<nav class="flex w-full flex-row items-center justify-between gap-1.5 p-1.5">
			<MobileNav></MobileNav>
			<MainNav></MainNav>
			<Searchbar></Searchbar>

			<FilterSettings />
			<Button onclick={toggleMode} variant="outline" size="icon" class="aspect-square">
				<Icon
					icon="mdi:weather-night"
					class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
				/>
				<Icon
					icon="mdi:weather-sunny"
					class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</nav>
	</header>
	{@render children()}
</div>
