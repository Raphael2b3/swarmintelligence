<script lang="ts">
	import type { IConnection } from '$lib/shared/types';

	let { connection }: { connection: IConnection } = $props();

	let value = $state(0.5);
	let value_indicator = $derived((value * 100).toFixed(2) + '%');
	const arg_type_str = connection.isProArgument ? 'Pro' : 'Contra';
</script>

<h5>Thesis</h5>
{connection.thesis.text}
<h5>{arg_type_str} Argument</h5>
{connection.argument.text}
<button>fav</button>
<button>share</button>
This is Actually a good {arg_type_str} Argument

<div
	style="flex:1 ; display:flex; flex-direction: column; align-items: center; justify-content: space-around;"
>
	{value_indicator}

	<div style="width:100%; display: flex; align-items: center;">
		bad
		<input type="range" bind:value step="0.001" min="0" max="1" />
		good
	</div>
</div>
