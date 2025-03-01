<script lang="ts">
	interface SliderProps {
		value?: number;
	}
	let { value = $bindable(0.5) }: SliderProps = $props();
</script>

<input
	type="range"
	bind:value
	min={0}
	max={1}
	step={0.001}
	style="width: 100%"
	aria-label="Continuous slider"
/>
