<script lang="ts">
	import type { IStatement } from '$lib/shared/types';
	let { statement }: { statement: IStatement } = $props();
</script>

{statement.text}
<button>ShowMore</button>
<button>Favourite</button>
<button>Share</button>
<button>Connect</button>
<button>OpenDetails</button>
<div style="display: flex; flex: 1; align-items: center; flex-direction: row; gap: 1rem;">
	<button>False</button>
	<button>True</button>
</div>
