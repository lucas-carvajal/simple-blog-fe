<script>
    import ArticleThumbnail from '$lib/ArticleThumbnail.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    {#each data.articles as article}
        <ArticleThumbnail 
            title={article.title}
            subhead={article.subheader}
            previewText={article.content[0].text}
            link={`/article/${article.id}`}
        />
    {/each}
</main>

<style>
    main {
        width: 100%;
    }

    :global(main > :not(:last-child)) {
        border-bottom: 1px solid #e5e5e5;
        padding: 1rem 0;
        margin: 1rem 0;
    }
</style>


