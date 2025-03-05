<script lang="ts">
	import Icon, { type IconProps } from '@iconify/svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	let { ...props }: IconProps & SvelteHTMLElements['svg'] = $props();
</script>

<Icon height="1rem" width="1rem" {...props}></Icon>
