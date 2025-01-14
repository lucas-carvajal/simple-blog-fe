<script>
    import ArticleForm from '$lib/ArticleForm.svelte';
    import { goto } from '$app/navigation';
    /** @type {import('./$types').PageData} */
    export let data;

    const { article } = data;
    const content = article.content.map(section => section.text);

    let form;

    async function handleUpdate() {
        const data = form.getData();
        
        try {
        const response = await fetch('http://localhost:8080/admin/article/' + article.id, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: article.id,
                title: data.title,
                subheader: data.subheader,
                content: data.content.map((text, idx) => ({ 
                    metadata: {
                        order: idx+1
                    },
                    text: text
                }))
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            goto('/admin');
        } else {
            console.error('Response status:', response.status);
            alert('Error updating article - please try again');
        }
        } catch (error) {
        console.error('Error:', error);
        alert('Error updating article - please try again');
        }
    }
</script>

<div class="button-row">
    <a href="/admin" class="cancel-button">Cancel</a>
    <button class="update-button" on:click={handleUpdate}>Update</button>
</div>

<ArticleForm title={article.title} subheader={article.subheader} content={content} bind:this={form} />

<style>
    .button-row {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .cancel-button, .update-button {
        padding: 0.75rem 2.5rem;
        border-radius: 0.375rem;
        border: none;
        background-color: #2563eb;
        color: white;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        font-family: inherit;
        text-decoration: none;
    }

    .cancel-button:hover, .update-button:hover {
        background-color: #1d4ed8;
    }
</style>
