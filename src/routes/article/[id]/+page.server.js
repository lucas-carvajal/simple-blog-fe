/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const response = await fetch(`http://localhost:8080/article/${params.id}`);
    const article = await response.json();
    return { article };
} 