<script lang="ts">
	import { Button } from '$lib/shared/components/ui/button';
	import type { IStatement } from '$lib/shared/types';

	let { statement }: { statement: IStatement } = $props();
</script>

<div style="display: flex; flex-direction: row;">
	<div>{statement.text}</div>
	<Button>Connect</Button>
</div>
