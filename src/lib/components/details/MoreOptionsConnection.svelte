<script lang="ts">
	import PopUpModal from '../PopUpModal.svelte';
	let { open }: { open: boolean } = $props();
</script>

<PopUpModal {open} title="More Options">
	<button>Report</button>
	if the entity is made by you
	<button>Delete</button>
	<button>Edit</button>
</PopUpModal>
