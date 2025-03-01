<script>
	import FlyOutMenu from '$lib/components/FlyOutMenu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
	let openedflyout = $state(true);
	function onMenuClick() {
		openedflyout = !openedflyout;
	}
</script>

<div style="height: 100vh; display:flex; flex-direction: column;">
	<Navbar {onMenuClick} onSearch={() => {}}></Navbar>
	<FlyOutMenu bind:open={openedflyout}>
		<a href="/login">Login</a>
		<a href="/register">Register</a>
		<a href="/logout">Logout</a>
		<a href="/settings">Settings</a>
		<a href="/about">About</a>
	</FlyOutMenu>
	{@render children()}
</div>
