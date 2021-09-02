<script>
    import { onMount } from "svelte"
    export let postId
    
    let comments = []
    let showComments = false

    onMount( async () => {
        try {
           const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)   
            comments = await res.json()
        } catch (err) {
            alert(err)
        }
    })
    
</script>

{#if !showComments}
    <button on:click = "{ () => showComments = true }"> Mostra { comments.length } commenti </button>
{:else}
    {#each comments as { name, email, body }}
        <div class = "comment">
            <div class = "header">
               <h4> { name } </h4> 
            </div>

            <div class = "email">
                { email }
            </div>

            <div class = "body">
                { body }
            </div>
        </div>
    {/each}
    <button on:click = "{ () => showComments = false }"> Mostra meno </button>
{/if}

<style>
    .comment {
		background-color: #fff;
		border: 1px #ccc solid;
		border-radius: 4px;
		padding: 1rem;
        margin: 5px
	}

	.header {
		align-items: center;
		display: flex;
	}

	.email {
		flex: 1 1 auto;
		margin-left: 0.5rem;
        color:rgb(151, 148, 148)
	}

	h4 {
		margin: 0;
	}


	.body {
		margin-top: 0.5rem;
	}

	.body :global(p) {
		margin: 0;
	}
    button {
        border: 0;
        font-family: inherit
    }
</style>