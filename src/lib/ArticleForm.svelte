<script>
    export let title = "";
    export let subheader = "";
    export let content = [""];

    export function getData() {
        return { title, subheader, content };
    }

    function addContentField() {
        content = [...content, ""];
    }

    function removeContentField(index = undefined) {
        if (index !== undefined) {
            content = content.filter((_, i) => i !== index);
        } else {
            content = content.slice(0, -1);
        }
    }
</script>

<form class="article-form">
    <div class="field">
        <label class="content-header" for="title">Title</label>
        <input 
            id="title"
            type="text" 
            bind:value={title} 
            placeholder="Article title"
        />
    </div>

    <div class="field">
        <label class="content-header" for="subheader">Subheader</label>
        <input 
            id="subheader"
            type="text" 
            bind:value={subheader} 
            placeholder="Article subheader"
        />
    </div>

    <div class="content-fields">
        <h3 class="content-header">Content</h3>
        {#each content as section, i}
            <!-- TODO: content does not show for existing articles!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <div class="content-field">
                <textarea 
                    bind:value={section} 
                    placeholder="Content section {i + 1}"
                    rows="4"
                ></textarea>
                {#if content.length > 1}
                    <button 
                        type="button" 
                        class="remove-button" 
                        on:click={() => removeContentField(i)}
                        aria-label="Remove section {i + 1}"
                    >
                        ×
                    </button>
                {/if}
            </div>
        {/each}
        <div class="button-container">
            <button type="button" class="add-button" on:click={addContentField}>
                Add Section
            </button>
        </div>
    </div>
</form>

<style>
    .article-form {
        width: 100%;
    }

    .field {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.375rem;
        font-family: inherit;
    }

    .content-fields {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-field {
        position: relative;
        margin-bottom: 1rem;
        width: 100%;
    }

    .remove-button {
        position: absolute;
        top: 50%;
        right: -3rem;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #ef4444;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
    }

    .remove-button:hover {
        background-color: #fee2e2;
    }

    .add-button {
        margin-top: 1rem;
        background-color: #2563eb;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        cursor: pointer;
        font-weight: 500;
    }

    .add-button:hover {
        background-color: #1d4ed8;
    }

    .content-header {
        width: 100%;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
</style>



