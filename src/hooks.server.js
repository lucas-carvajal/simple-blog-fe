import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
    const response = await resolve(event);
    if (response.status === 401 || response.status === 403) {
        return redirect(303, '/login');
    }
    return response;
}
