<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import { Button } from '$lib/shared/components/ui/button';
	import * as Sheet from '$lib/shared/components/ui/sheet';
	import { ScrollArea } from '$lib/shared/components/ui/scroll-area/index.js';
	import MobileLink from './mobile-link.svelte';

	let { open = $bindable(), children } = $props();

	function closeFlyout() {
		open = false;
	}

	const targets = [
		{ items: [{ disabled: false, href: '/', label: 'home', title: 'home' }], title: 'home' }
	];
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<Icon icon="streamline:artificial-intelligence-spark" class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<Icon icon="streamline:artificial-intelligence-spark" class="mr-2 h-4 w-4" />
			<span class="font-bold">Homepage</span>
		</MobileLink>
		<ScrollArea orientation="both" class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
			<div class="flex flex-col space-y-3">
				<MobileLink href={navItem.href} bind:open class="text-foreground">
					{navItem.title}
				</MobileLink>
			</div>
			<div class="flex flex-col space-y-2">
				{#each targets as navItem, index (index)}
					<div class="flex flex-col space-y-3 pt-6">
						<h4 class="font-medium">{navItem.title}</h4>
						{#if navItem?.items?.length}
							{#each navItem.items as item}
								{#if !item.disabled && item.href}
									<MobileLink href={item.href} bind:open>
										{item.title}
										{#if item.label}
											<span
												class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
											>
												{item.label}
											</span>
										{/if}
									</MobileLink>
								{/if}
							{/each}
						{/if}
					</div>
				{/each}
			</div>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>

<div
	class="fixed top-0 left-0 z-10 flex flex-col bg-white"
	style="transform: translateX({open ? '0' : '-100%'})"
>
	<div class="flex flex-row justify-between">
		<h5>Menu</h5>
		<button onclick={closeFlyout}>Close</button>
	</div>
	{@render children()}
	<!-- Slot für dynamische Inhalte -->
</div>
