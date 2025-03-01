<script lang="ts">
	let value =
		'Large Text Field with Helper Text and no Resizing Allowed (rows=4, cols=24) - Textfield Component from SMUI Svelte Kit Library 		 ';
</script>

Statement
<textarea
	style="flex:1"
	readonly
	onclick={() => {
		console.log('clicked');
	}}
	bind:value
	placeholder="Helper Text"
>
</textarea>
