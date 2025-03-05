<script lang="ts">
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
	<textarea bind:value={text} title="Statement"></textarea>
	<div style="display: flex; flex-direction: row;">
		<button onclick={onContraSelected}>False</button>
		<button onclick={onProSelected}>True</button>
	</div>
	<p>Tags</p>
	<textarea bind:value={tags} title="Tags"></textarea>
	<div style="display: flex; flex-direction: row;">
		<button onclick={onCancel}>Cancel</button>
		<button onclick={onSave}>Save</button>
	</div>
</div>
