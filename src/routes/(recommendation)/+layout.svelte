<script>
	import FlyOutMenu from '$lib/features/navigation/mobile-nav.svelte';
	import Searchbar from '$lib/features/searchbar/Searchbar.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { Button } from '$lib/shared/components/ui/button';
	import { toggleMode } from 'mode-watcher';

	let { children } = $props();
</script>

<header
	class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 container w-full border-b backdrop-blur"
>
	<nav class="flex flex-row items-center justify-between">
		<Searchbar></Searchbar>
		<Button onclick={toggleMode} variant="outline" size="icon">
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
		<FlyOutMenu>
			<a href="/login">Login</a>
			<a href="/register">Register</a>
			<a href="/logout">Logout</a>
			<a href="/settings">Settings</a>
			<a href="/about">About</a>
		</FlyOutMenu>
	</nav>
</header>
<div class="py-4">
	{@render children()}
</div>
