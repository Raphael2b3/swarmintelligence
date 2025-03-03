<script>
	import FlyOutMenu from '$lib/features/navigation/FlyOutMenu.svelte';
	import Searchbar from '$lib/features/searchbar/Searchbar.svelte';
	let { children } = $props();
	let openedflyout = $state(true);
	function onMenuClick() {
		openedflyout = !openedflyout;
	}
</script>

<div style="height: 100vh; display:flex; flex-direction: column;">
	<nav>
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
