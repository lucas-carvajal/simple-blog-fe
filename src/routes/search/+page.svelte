<script>
    import ArticleThumbnail from '$lib/ArticleThumbnail.svelte';
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    let searchInput;
    let searchQuery = '';

    async function search() {
        if (searchQuery.length === 0) {
            location.reload();
            return;
        }
        const response = await fetch('http://localhost:8080/articles/search?q=' + searchQuery);
        const articles = await response.json();
        data = { articles };
    }

    onMount(() => searchInput.focus());

    async function handleSubmit(e) {
        e.preventDefault();
        await search();
        searchInput.blur();
    }
</script>

<div class="search-page">
    <div class="search-container">
        <form on:submit={handleSubmit} action="">
            <input 
                bind:this={searchInput}
                type="text"
                inputmode="search"
                enterkeyhint="search"
                bind:value={searchQuery}
                placeholder="Search articles..."
                class="search-input"
            />
        </form>
        <!-- TODO iPhone search does not work -->
    </div>
</div>

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
    .search-page {
        padding-top: 2rem;
    }

    .search-container {
        max-width: 600px;
        margin: 0 auto;
    }

    .search-input {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: 2px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .search-input:focus {
        outline: none;
        border-color: #666;
    }

    main {
        width: 100%;
    }

    :global(main > :not(:last-child)) {
        border-bottom: 1px solid #e5e5e5;
        padding: 1rem 0;
        margin: 1rem 0;
    }
</style>
