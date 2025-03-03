<script lang="ts">
	import type { IConnection } from '$lib/shared/interfaces';
	import { getFallbackConnection } from '$lib/shared/state/entities.svelte';
	import ActionButtonList from '../ActionButtonList.svelte';
	import Slider from '../form/Slider.svelte';
	import ScrollableRichText from '../ScrollableRichText.svelte';

	let { connection = getFallbackConnection() }: { connection: IConnection } = $props();
	let value = $state(0.5);
	let value_indicator = $derived((value * 100).toFixed(2) + '%');
	const arg_type_str = connection.isProArgument ? 'Pro' : 'Contra';
</script>

<h5>Thesis</h5>
<ScrollableRichText></ScrollableRichText>
<h5>{arg_type_str} Argument</h5>
<ScrollableRichText></ScrollableRichText>
<ActionButtonList>
	<div>fav</div>
	<div>share</div>
</ActionButtonList>
This is Actually a good {arg_type_str} Argument

<div
	style="flex:1 ; display:flex; flex-direction: column; align-items: center; justify-content: space-around;"
>
	{value_indicator}

	<div style="width:100%; display: flex; align-items: center;">
		bad

		<Slider bind:value></Slider>
		good
	</div>
</div>
