<script lang="ts">
	let { value = '', title = 'Texfield' } = $$props;
</script>

<input type="text" class="outline" bind:value {title} placeholder="Helper Text" />
