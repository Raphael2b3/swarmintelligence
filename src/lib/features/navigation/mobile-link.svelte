<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils.js';

	let { href, open = $bindable(), class: className = '', children, ...props } = $props();
</script>

<a
	{href}
	class={cn(page.url.pathname === href ? 'text-foreground' : 'text-foreground/60', className)}
	onclick={() => (open = false)}
	{...props}
>
	{@render children()}
</a>
