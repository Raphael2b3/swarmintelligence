<script>
	import Textfield from './form/Textfield.svelte';
	let text = $state('It is True that, ');
	let tags = $state('cool, stuff');

	function onContraSelected() {
		console.log('False selected');
	}
	function onProSelected() {
		console.log('True selected');
	}

	function onCancel() {
		console.log('Cancel');
	}

	function onSave() {
		console.log('Save');
	}
</script>

<div>
	<p>Create Statement</p>
	<Textfield bind:value={text} title="Statement"></Textfield>
	<div style="display: flex; flex-direction: row;">
		<button onclick={onContraSelected}>False</button>
		<button onclick={onProSelected}>True</button>
	</div>
	<p>Tags</p>
	<Textfield bind:value={tags} title="Tags"></Textfield>
	<div style="display: flex; flex-direction: row;">
		<button onclick={onCancel}>Cancel</button>
		<button onclick={onSave}>Save</button>
	</div>
</div>
