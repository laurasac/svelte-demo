
<script>
    import { onMount } from "svelte"
    import Post from "./Post.svelte"
    import Comments from "./Comments.svelte"
    
    let posts = []
    
    onMount( async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            posts = await res.json()
        } catch (err) {
            alert(err)
        }
        
    })
</script>


<h1> Posts </h1>
{#each posts as { id, userId, title, body }}
    <Post userId = { userId } title = { title } body = { body }> 
    <Comments slot = "comments" postId = { id } />
    </Post>
{/each}