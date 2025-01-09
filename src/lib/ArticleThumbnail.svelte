<script>
    export let title = "Article Title Goes Here";
    export let subhead = "Subheading or Short Description";
    export let previewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    export let titleColor = "black";
    export let subheadColor = "black";
    export let textColor = "black";
    export let link = "https://google.com";
</script>

<a href={link} class="article-thumbnail">
    <h2 class="title" style="color: {titleColor}">{title}</h2>
    <h4 class="subhead" style="color: {subheadColor}">{subhead}</h4>
    <p class="preview-text" style="color: {textColor}">{previewText}</p>
</a>

<style>
    .article-thumbnail {
        padding: 1.5rem;
        max-width: 600px;
        background-color: transparent;
        display: block;
        text-decoration: none;
        transition: background-color 0.2s ease;
        cursor: pointer;
    }

    .article-thumbnail:hover {
        background-color: rgba(0, 0, 0, 0.03);
    }

    .title {
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
    }

    .subhead {
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 0 1rem 0;
    }

    .preview-text {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
