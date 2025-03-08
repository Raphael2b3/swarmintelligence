<script lang="ts">
	import * as Statement from '$lib/features/statement/';
	import * as Connection from '$lib/features/connection/';
	import * as Duplication from '$lib/features/duplication/';

	import {
		getFallbackConnection,
		getFallbackDuplication,
		getFallbackStatement
	} from '$lib/shared/state/entities.svelte';
	import { uistate } from '$lib/shared/state/searchmode.svelte';
	import PageScroller from '$lib/shared/components/pagescroller/PageScroller.svelte';

	let randint: number = $state(0);

	const statement = getFallbackStatement();
	const connection = {
		...getFallbackConnection(),
		thesis: statement,
		argument: statement
	};
	const duplication = {
		...getFallbackDuplication(),
		statementA: statement,
		statementB: statement
	};
</script>

<div class="h-full w-full">
	<PageScroller pageBuilder dataProxy></PageScroller>
</div>
