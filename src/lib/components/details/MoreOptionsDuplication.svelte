<script lang="ts">
	import BorderlessButton from '../buttons/BorderlessButton.svelte';
	import PopUpModal from '../PopUpModal.svelte';
	let { open }: { open: boolean } = $props();
	let selected = $state('Pros');
</script>

<PopUpModal {open} title="More Options">
	<button>Report</button>
	if the entity is made by you
	<button>Delete</button>
	<button>Edit</button>
</PopUpModal>
