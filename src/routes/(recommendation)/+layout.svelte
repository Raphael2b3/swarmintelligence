<script>
	import FlyOutMenu from '$lib/features/navigation/FlyOutMenu.svelte';
	import Searchbar from '$lib/features/searchbar/Searchbar.svelte';
	let { children } = $props();
	let openedflyout = $state(true);
	function onMenuClick() {
		openedflyout = !openedflyout;
	}
</script>

<div class="flex flex-col">
	<nav class="flex flex-row">
		<button onclick={onMenuClick}>Burger</button>
		<Searchbar></Searchbar>
		<FlyOutMenu bind:open={openedflyout}>
			<a href="/login">Login</a>
			<a href="/register">Register</a>
			<a href="/logout">Logout</a>
			<a href="/settings">Settings</a>
			<a href="/about">About</a>
		</FlyOutMenu>
	</nav>
	{@render children()}
</div>
