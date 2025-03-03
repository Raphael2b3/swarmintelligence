<script lang="ts">
	import { Button } from '$lib/shared/components/ui/button';

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
		<Button onclick={onContraSelected}>False</Button>
		<Button onclick={onProSelected}>True</Button>
	</div>
	<p>Tags</p>
	<textarea bind:value={tags} title="Tags"></textarea>
	<div style="display: flex; flex-direction: row;">
		<Button onclick={onCancel}>Cancel</Button>
		<Button onclick={onSave}>Save</Button>
	</div>
</div>
