<script>
    import '../app.css';
    import { goto } from '$app/navigation';

    function handleSearch() {
        goto('/search');
    }
</script>

<div class="container">
    <div class="header">
        <div class="spacer"></div>
        <h1 class="page-title">Simple Blog</h1>
        <button class="search-button" aria-label="Search" on:click={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </button>
    </div>
    
    <slot />
</div>

<style>
    .container {
        max-width: 50rem;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
    }

    .spacer {
        width: 40px; /* Same width as the search button to ensure title stays centered */
    }

    .page-title {
        margin: 0;
        text-align: center;
    }

    .search-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 50%;
        transition: background-color 0.2s;
        color: #333;
    }

    .search-button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
</style> 