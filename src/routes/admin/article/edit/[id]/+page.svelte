<script>
    import ArticleForm from '$lib/ArticleForm.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    const { article } = data;
    const content = article.content.map(section => section.text);
</script>

<ArticleForm title={article.title} subheader={article.subheader} content={content} />

<!-- TODO add update and cancel buttons and make em work -->