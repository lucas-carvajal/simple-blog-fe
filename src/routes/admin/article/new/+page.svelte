<script>
    import ArticleForm from '$lib/ArticleForm.svelte';
    import { goto } from '$app/navigation';

    let form;

    async function handleSave() {
        const data = form.getData();
        
        try {
        const response = await fetch('http://localhost:8080/admin/article', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
            alert('Error saving article - please try again');
        }
        } catch (error) {
        console.error('Error:', error);
        alert('Error saving article - please try again');
        }
    }
</script>

<div class="button-row">
    <a href="/admin" class="cancel-button">Cancel</a>
    <button class="save-button" on:click={handleSave}>Save</button>
</div>

<ArticleForm bind:this={form} />

<style>
    .button-row {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .cancel-button, .save-button {
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

    .cancel-button:hover, .save-button:hover {
        background-color: #1d4ed8;
    }
</style>