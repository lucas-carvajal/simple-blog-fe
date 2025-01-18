<script>
    import { goto } from '$app/navigation';

    let password = '';

    async function handleLogin() {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                password: password,
            })
        });

        if (response.ok) {
            goto('/admin');
        } else {
            alert('Login failed');
        }
    }
</script>

<form on:submit|preventDefault={handleLogin}>
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
</form>
