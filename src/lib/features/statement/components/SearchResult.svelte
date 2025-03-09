<script lang="ts">
	import type { IStatement } from '$lib/types';

	let { statement }: { statement: IStatement } = $props();
</script>

<div style="display: flex; flex-direction: row;">
	<div>{statement.text}</div>
	<button>Connect</button>
</div>
