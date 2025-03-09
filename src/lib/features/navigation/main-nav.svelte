<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/config/site';
	import { docsConfig } from '$lib/config/docs';
	import Icon from '$lib/components/Icon.svelte';
	import { cn } from '$lib/utils';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icon icon="streamline:artificial-intelligence-spark" class="h-6 w-6" />
		<span class="hidden font-bold xl:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each docsConfig.mainNav as navItem, index (navItem + index.toString())}
			{#if navItem.href}
				<a
					href={navItem.href}
					class={cn(
						'hover:text-foreground/80 transition-colors',
						page.url.pathname === navItem.href ? 'text-foreground' : 'text-foreground/60'
					)}
				>
					{navItem.title}
				</a>
			{/if}
		{/each}
	</nav>
</div>
