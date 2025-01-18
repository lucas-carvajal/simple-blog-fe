import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const authResponse = await fetch('http://localhost:8080/auth/is-authenticated');

    if (!authResponse.ok) {
        if (authResponse.status === 401 || authResponse.status === 403) {
            throw redirect(303, '/admin/login');
        }
    }

    const response = await fetch('http://localhost:8080/articles');
    const articles = await response.json();
    return { articles };
}
