<script lang="ts">
	import type { IConnection, IStatement } from '$lib/interfaces';
	import { getEntity, getFallbackConnection } from '$lib/state/entities.svelte';

	let { connection = getFallbackConnection() }: { connection: IConnection } = $props();
	let thesis = getEntity(connection.thesis, 'statement') as IStatement;
	let argument = getEntity(connection.argument, 'statement') as IStatement;
</script>

<div>
	Thesis
	{thesis.text}
	{connection.isProArgument ? 'Pro Argument' : 'Con Argument'}
	<div>{argument.text}</div>
</div>
