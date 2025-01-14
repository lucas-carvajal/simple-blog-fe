<script>
    import ArticleThumbnail from '$lib/ArticleThumbnail.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    
    let showConfirmDialog = false;
    let articleToDelete = null;

    function handleDelete(id) {
        articleToDelete = id;
        showConfirmDialog = true;
    }

    async function confirmDelete() {
        try {
            const response = await fetch(`http://localhost:8080/admin/article/${articleToDelete}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error deleting article - please try again');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting article - please try again');
        }
        showConfirmDialog = false;
    }
</script>

{#if showConfirmDialog}
    <div class="modal-backdrop">
        <div class="modal">
            <h2>Delete Article</h2>
            <p>Are you sure you want to delete this article?</p>
            <div class="modal-buttons">
                <button class="cancel-button" on:click={() => showConfirmDialog = false}>Cancel</button>
                <button class="delete-button" on:click={confirmDelete}>Delete</button>
            </div>
        </div>
    </div>
{/if}

<a href="/admin/article/new" class="add-button">Add Article</a>

<main>
    {#each data.articles as article}
        <ArticleThumbnail 
            title={article.title}
            subhead={article.subheader}
            previewText={article.content[0].text}
            link={`admin/article/edit/${article.id}`}
            deleteFunction={() => handleDelete(article.id)}
        />
    {/each}
</main>

<style>
    .add-button {
        display: block;
        width: fit-content;
        margin: 0 auto 2rem auto;
        padding: 0.75rem 1.5rem;
        background-color: #2563eb;
        color: white;
        text-decoration: none;
        border-radius: 0.375rem;
        font-weight: 500;
    }

    .add-button:hover {
        background-color: #1d4ed8;
    }

    main {
        width: 100%;
    }

    :global(main > :not(:last-child)) {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 90%;
        max-width: 400px;
    }

    .modal h2 {
        margin: 0 0 1rem 0;
    }

    .modal p {
        margin: 0 0 1.5rem 0;
    }

    .modal-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }

    .delete-button {
        background: #dc2626;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        cursor: pointer;
    }

    .delete-button:hover {
        background: #b91c1c;
    }

    .cancel-button {
        background: #e5e7eb;
        color: #374151;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        cursor: pointer;
    }

    .cancel-button:hover {
        background: #d1d5db;
    }
</style>


