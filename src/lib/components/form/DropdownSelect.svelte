<script lang="ts">
	let { options = [], value } = $$props;
</script>

Select Menu
<select bind:value>
	{#each options as option}
		<option value={option.value}>{option.name}</option>
	{:else}
		No Values
	{/each}
</select>
