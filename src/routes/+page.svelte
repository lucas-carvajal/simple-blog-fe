<script>
    import ArticleThumbnail from '$lib/ArticleThumbnail.svelte';
</script>

<main>
    <ArticleThumbnail 
        title="Getting Started with SvelteKit"
        subhead="A comprehensive guide for beginners"
        previewText="SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. In this guide, we'll explore the basics of SvelteKit and build a simple application from scratch..."
    />

    <ArticleThumbnail 
        title="The Future of Web Development"
        subhead="Trends to watch in 2024"
        previewText="As we move further into 2024, several emerging technologies and methodologies are reshaping how we build for the web. From AI-assisted coding to new framework innovations, let's explore what's on the horizon..."
    />

    <ArticleThumbnail 
        title="Building Responsive Layouts"
        subhead="Modern CSS techniques"
        previewText="Creating responsive layouts has never been more important. With the proliferation of different device sizes and types, we need to ensure our websites look great everywhere. In this article, we'll explore modern CSS techniques..."
    />
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    /* Replace the margin with a divider */
    :global(main > :not(:last-child)) {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }
</style>


