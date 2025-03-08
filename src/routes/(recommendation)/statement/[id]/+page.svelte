<script lang="ts">
	import { page } from '$app/state';
	import { statements } from '$lib/database/statements/data';
	import * as Statement from '$lib/features/statement';
	let id = page.params.id;
</script>

<Statement.Extended statement={statements[0]}></Statement.Extended>
