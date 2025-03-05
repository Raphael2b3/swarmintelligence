<script lang="ts">
	let { owner = false } = $props();
</script>

<button>Report</button>
{#if owner}
	<button>Delete</button>
	<button>Edit</button>
{/if}