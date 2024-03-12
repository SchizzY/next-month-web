import { PRIVATE_CLERK_SECRET_KEY } from '$env/static/private'
import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from 'clerk-sveltekit/server'

export const handle: Handle = sequence(
	handleClerk(PRIVATE_CLERK_SECRET_KEY, {
		debug: true,
		protectedPaths: ['/admin', '/dashboard'],
		signInUrl: '/',
	})
)