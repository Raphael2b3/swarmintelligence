<script lang="ts">
	let { options, value = $bindable(), label, ...others } = $props();
</script>

<select bind:value {...others}>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>
