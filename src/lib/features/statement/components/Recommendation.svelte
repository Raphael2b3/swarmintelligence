<script lang="ts">
	import { Button } from '$lib/shared/components/ui/button';
	import type { IStatement } from '$lib/shared/types';
	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
<Button>ShowMore</Button>
<Button>Favourite</Button>
<Button>Share</Button>
<Button>Connect</Button>
<Button>OpenDetails</Button>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<Button>False</Button>
	<Button>True</Button>
</div>
