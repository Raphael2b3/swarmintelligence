<script lang="ts">
	let { statement = {text:"Fallback"} } = $props();

	function onContraSelected() {
		console.log('Contra selected');
	}
	function onProSelected() {
		console.log('Pro selected');
	}
</script>

<div style="flex-direction: row;">
	<div>{statement.text}</div>
	<button onclick={onContraSelected}>Select As Opposed Thesis</button>
	<button onclick={onProSelected}>Select As Supported Thesis</button>
</div>
