<script lang="ts">
	import type { IConnectionExtended } from '../types';
	let { connection }: { connection: IConnectionExtended } = $props();
</script>

<div>
	Thesis
	{connection.thesis.text}
	{connection.isProArgument ? 'Pro Argument' : 'Con Argument'}
	<div>{connection.argument.text}</div>
</div>
