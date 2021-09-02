import type { EndpointOutput } from "@sveltejs/kit"
import type { ServerRequest } from "@sveltejs/kit/types/hooks"

interface User {
    email: string,
    password: string
}
const users: User[] = [
    { email: "mario@gmail.com", password: "ciao"},
    { email: "luigi@gmail.com", password:"mare"}
]
export  function post({ body }: ServerRequest): EndpointOutput {
    for(const user in  users) {
        if (users[user].email === body.email && users[user].password === body.password) {
          return {
                status : 301,
                headers: {
                    "Content-type": "application/json"
                },
                body: {
                    location: "/posts"
                }
            }
        }
    }
    
    return {
        status : 401,
        headers: {
            "Content-type": "application/json"
        },
        body: {
            error: "Unauthorized"
        }
    }
}