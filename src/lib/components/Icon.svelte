<script lang="ts">
	import Icon, { type IconProps } from '@iconify/svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	let {
		children,
		icon2 = '',
		icon,
		isAlternative = false,
		...props
	}: IconProps &
		SvelteHTMLElements['svg'] & {
			children?: any;
			icon2?: string;
			isAlternative?: boolean;
		} = $props();
</script>

<div class="flex flex-row items-center gap-1">
	<Icon height="1.2rem" width="1.2rem" inline icon={isAlternative ? icon2 : icon} {...props}></Icon>
	{@render children?.()}
</div>
