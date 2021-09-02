
<script>
    let email 
    let password
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const check = async () => {
        
        if (!re.test(String(email).toLowerCase())) {
            alert( "email non valida ")
            return
        }

        try {
            const res = await fetch("/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({email, password})
            })
            if (res.status === 301) {
                const data = await res.json()
                window.location.href = data.location
            } else {
                const data = await res.json()
                alert(data.error)
            }
         
        } catch (err) {
            alert(err)

        }
        
    }
</script>

<h1> Login </h1>

<label>
    Email
    <input name = { email } bind:value = { email }>
</label>

<label>
    Password
    <input name = { password } bind:value = { password }>
</label>
<button on:click = { check } disabled = "{ !email || !password }"> Login </button>
