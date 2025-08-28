<script lang="ts">
	interface IOptions {
		label: string;
		value: string;
	}
	interface IProps {
		group: any;
		options: IOptions[];
	}
	let { group = $bindable(), options }: IProps = $props();
</script>

{#each options as option}
	<label>
		<input type="checkbox" bind:group value={option.value} />
		{option.label}
	</label>
{/each}
