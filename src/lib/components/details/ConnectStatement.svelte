<script lang="ts">
	import PopUpModal from '../PopUpModal.svelte';
	let { open }: { open: boolean } = $props();
</script>

<PopUpModal {open} title="Connect this Statement">
	<button>Add Argument</button>
	<button>Add This As Argument</button>
</PopUpModal>
