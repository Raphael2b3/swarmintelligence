<script>
	import { onMount } from 'svelte';
	import searchSvelte from '../../state/search.svelte';
	function login() {
		// Implement login logic here
		console.log('Login');
	}

	function logout() {
		// Implement logout logic here
		console.log('Logout');
	}
</script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
	<a href="#" onclick={login}>Login</a>

	<a href="#" onclick={logout}>Logout</a>
</div>

<button onclick={() => (searchSvelte.results = ['hallo bitch'])}>set global state</button>
