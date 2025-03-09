<script lang="ts">
	interface IOption {
		value: string;
		label: string;
	}
	let {
		options,
		value = $bindable(),
		label,
		...others
	}: {
		options: IOption[];
		value: any;
		label: string;
	} = $props();
</script>

<div class="flex flex-col">
	{label}
	<select bind:value {...others}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
