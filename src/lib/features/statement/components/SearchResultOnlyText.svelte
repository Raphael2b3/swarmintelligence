<script lang="ts">
	import type { IStatement } from '$lib/shared/types';

	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
