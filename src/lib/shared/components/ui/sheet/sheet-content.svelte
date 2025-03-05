<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { fly } from 'svelte/transition';
	import {
		SheetOverlay,
		SheetPortal,
		type Side,
		sheetTransitions,
		sheetVariants
	} from './index.js';
	import { cn } from '$lib/shared/utils.js';

	type $$Props = SheetPrimitive.ContentProps & {
		side?: Side;
	};

	let className: $$Props['class'] = undefined;
	export let side: $$Props['side'] = 'right';
	export { className as class };
	export let inTransition: $$Props['inTransition'] = fly;
	export let inTransitionConfig: $$Props['inTransitionConfig'] =
		sheetTransitions[side ?? 'right'].in;
	export let outTransition: $$Props['outTransition'] = fly;
	export let outTransitionConfig: $$Props['outTransitionConfig'] =
		sheetTransitions[side ?? 'right'].out;
</script>

<SheetPortal>
	<SheetOverlay />
	<SheetPrimitive.Content
		{inTransition}
		{inTransitionConfig}
		{outTransition}
		{outTransitionConfig}
		class={cn(sheetVariants({ side }), className)}
		{...$$restProps}
	>
		<slot />
		<SheetPrimitive.Close
			class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
		>
			<Icon icon="mdi:close" class="h-6 w-6" />
			<span class="sr-only">Close</span>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPortal>
