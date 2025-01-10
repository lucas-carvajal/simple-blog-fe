<script>
    import '../app.css';
</script>

<h1 class="page-title">Simple Blog</h1>
<div class="container">
    <slot />
</div>

<style>
    .page-title {
        text-align: center;
        font-size: 2.5rem;
        margin: 2rem 0;
        font-weight: 700;
    }
    
    .container {
        max-width: 50rem;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }
</style> 