<script lang="ts">
	import Icon, { type IconProps } from '@iconify/svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { cn } from '../utils';
	let { children, ...props }: IconProps & SvelteHTMLElements['svg'] & { children?: any } = $props();
</script>

<div class="{cn('flex flex-row gap-1', props.class)}}">
	<Icon height="1.2rem" width="1.2rem" {...props}></Icon>
	{@render children?.()}
</div>
