<script lang="ts">
	type OwnProps = {
		choices?: string[];
		selected?: string;
	};
	let { choices = ['option1', 'option2'], selected = $bindable() }: OwnProps = $props();
</script>

<!--
  Note: segments must be unique. (They cannot === each other.)
  If you need to show the same value, use keyed segments.
-->
<nav class="tab-nav">
	{#each choices as choice}
		<a href="#" class:active={selected === choice} onclick={() => (selected = choice)}>
			{choice}
		</a>
	{/each}
</nav>
