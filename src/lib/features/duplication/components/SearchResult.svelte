<script lang="ts">
	import type { IDuplicationExtended } from '../types';

	let { duplication }: { duplication: IDuplicationExtended } = $props();
</script>

{duplication.statementA.text}<br />
equal to<br />
{duplication.statementB.text}
