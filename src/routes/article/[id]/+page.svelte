<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const { article } = data;
</script>

<article class="article">
    <header>
        <h1>{article.title}</h1>
        <h2>{article.subheader}</h2>
        <time datetime={article.updatedAt}>
            <span class="update-label">Last updated:</span>
            {new Date(article.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </time>
    </header>

    <div class="content">
        {#each article.content as section}
            <p>{section.text}</p>
        {/each}
    </div>
</article>

<style>
    .article {
        width: 100%;
    }

    header {
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        color: #4a5568;
        margin: 0 0 1rem 0;
    }

    time {
        color: #718096;
        font-size: 0.875rem;
    }

    .content {
        line-height: 1.8;
    }

    p {
        margin: 1.5rem 0;
    }

    .update-label {
        margin-right: 0.25rem;
    }
</style> 