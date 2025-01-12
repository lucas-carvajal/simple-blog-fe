<script>
    import ArticleThumbnail from '$lib/ArticleThumbnail.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    function handleDelete(id) {
        alert('TODO to be implemented - would delete article with id: ' + id);
    }
</script>

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
</style>


