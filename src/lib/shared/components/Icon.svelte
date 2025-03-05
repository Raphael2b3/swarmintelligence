<script lang="ts">
	import Icon, { type IconProps } from '@iconify/svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	let { children, ...props }: IconProps & SvelteHTMLElements['svg'] & { children?: any } = $props();
</script>

<div class="flex flex-row gap-1">
	<Icon height="1.2rem" width="1.2rem" {...props}></Icon>
	{@render children?.()}
</div>
