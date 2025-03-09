<script lang="ts">
	import type { IStatement } from '$lib/types';

	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
