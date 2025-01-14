<script>
    export let title = "Article Title Goes Here";
    export let subhead = "Subheading or Short Description";
    export let previewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    export let titleColor = "black";
    export let subheadColor = "black";
    export let textColor = "black";
    export let link = "https://google.com";
    export let deleteFunction = undefined;

    function handleDelete(e) {
        e.preventDefault(); // Prevent link navigation
        deleteFunction();
    }
</script>

<a href={link} class="article-thumbnail">
    {#if deleteFunction}
        <button class="delete-button" on:click={handleDelete} aria-label="Delete article">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
        </button>
    {/if}
    <h2 class="title" style="color: {titleColor}">{title}</h2>
    <h4 class="subhead" style="color: {subheadColor}">{subhead}</h4>
    <p class="preview-text" style="color: {textColor}">{previewText}</p>
</a>

<style>
    .article-thumbnail {
        padding: 1.5rem;
        width: 100%;
        box-sizing: border-box;
        background-color: transparent;
        display: block;
        text-decoration: none;
        transition: background-color 0.2s ease;
        cursor: pointer;
        position: relative;
    }

    .delete-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        color: #718096;
        border-radius: 0.25rem;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .delete-button:hover {
        background-color: #fee2e2;
        color: #dc2626;
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
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
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
