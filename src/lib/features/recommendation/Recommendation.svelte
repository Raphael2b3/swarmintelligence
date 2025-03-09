<script lang="ts">
	import * as Statement from '$lib/features/statement/';
	import * as Connection from '$lib/features/statement/features/connection';
	import * as Duplication from '$lib/features/statement/features/duplication';
	import { type IEntity, isIConnection, isIDuplication, isIStatement } from '$lib/types';

	let { entity }: { entity: IEntity } = $props();
</script>

{#if entity === undefined}
	<div class="flex h-full w-full items-center justify-center">
		<span class="loader"></span>
	</div>
{:else if isIStatement(entity)}
	<Statement.Recommendation statement={entity} />
{:else if isIConnection(entity)}
	<Connection.Recommendation connection={entity} />
{:else if isIDuplication(entity)}
	<Duplication.Recommendation duplication={entity} />
{/if}
