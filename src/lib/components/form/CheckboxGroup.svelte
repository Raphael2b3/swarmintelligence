<script lang="ts">
	import Checkbox from './Checkbox.svelte';

	let { group, options } = $$props;
</script>

{#each options as option}
	<Checkbox bind:group label={option.label} value={option.value} />
	<span>{option.label}</span>
{/each}
