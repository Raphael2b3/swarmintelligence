<script lang="ts">
	import type { IDuplication, IStatement } from '$lib/shared/interfaces';
	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
