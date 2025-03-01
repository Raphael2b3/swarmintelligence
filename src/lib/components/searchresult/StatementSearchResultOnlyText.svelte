<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/interfaces';
	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
