<script lang="ts">
	let { checked = null, label, group } = $$props;
</script>

<input type="checkbox" bind:checked />
<span>{label}</span>
