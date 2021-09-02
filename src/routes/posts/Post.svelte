<script>
    import { onMount } from "svelte"
    export let userId
    export let title
    export let body
    
    let username
    
    onMount(async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await res.json()
            username = data.username
        } catch (err) {
            alert(err)
        }
    })

</script>

<div class = "card">
    <div>
        <h2> {title} </h2>
        <p> {body} </p>
        <p class = "username"> <strong> {username} </strong> </p>
    </div>

    <div class = "discussion">
        <h3> Comments </h3>
        <slot name="comments"></slot>
    </div>
    
</div>

<style>
    .card {
		border: 1px #ccc solid;
		border-radius: 4px;
		position: relative;
        margin-bottom: 20px;
	}

	.card > div {
		padding: 1.25rem;
	}

	

	h2,
	h3 {
		margin: 0 0 0.5rem;
	}

	h3 {
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	p {
		color: #777;
		margin: 5px;
	}

	.discussion {
		background-color: #eee;
		border-top: 1px #ccc solid;
	}
    .username {
        color: rgb(26, 26, 88);
    }
</style>