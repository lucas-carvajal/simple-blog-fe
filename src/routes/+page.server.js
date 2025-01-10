/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch('http://localhost:8080/articles');
    const articles = await response.json();
    return { articles };
} 