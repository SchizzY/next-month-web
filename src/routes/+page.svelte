<script>
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte';
</script>

<div class="flex h-screen bg-gradient-to-r from-gray-700 via-gray-700 to-slate-900">
	<div class="container mx-auto flex flex-col items-center justify-center">
		<h1 class="flex w-full items-center justify-center p-6 font-lobster text-[60px] text-slate-400">
			Next Month
		</h1>
		<SignIn redirectUrl="/dashboard" />
	</div>
</div>
