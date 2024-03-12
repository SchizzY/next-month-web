<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	let isDashboardActive = false;

	$: {
		isDashboardActive = window.location.pathname === '/dashboard';
	}

	const handleDashboardRoute = () => {
		goto('/dashboard');
	};

	const handleAdminRoute = () => {
		goto('/admin');
	};
</script>

<div class="flex h-[100%] bg-black">
	<div class="h-screen w-[20%]">
		<Command.Root>
			<Command.List>
				<Command.Group>
					<Command.Item
						onSelect={handleDashboardRoute}
						class={cn({ 'bg-green-300': isDashboardActive })}>Dashboard</Command.Item
					>
					<Command.Item onSelect={handleAdminRoute}>Account</Command.Item>
				</Command.Group>
			</Command.List>
		</Command.Root>
	</div>
	<div class="w-full">
		<slot />
	</div>
</div>
