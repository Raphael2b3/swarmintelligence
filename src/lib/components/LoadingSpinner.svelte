<div class="flex h-full w-full items-center justify-center">
	<span class="loader"></span>
</div>

<style>
	.loader {
		width: 48px;
		height: 48px;
		border: 5px solid hsl(var(--secondary-foreground));
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
