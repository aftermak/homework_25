import { API_URL } from "../Const";
export function LoginFormSubmit (user, checkError, setToken) {

    fetch(API_URL + 'login', {   
        method: "POST",     
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: user.email,
                password: user.password
            }
        ) 
    })
    .then ((res) => {
        if(res.ok) {
            res.json()
            .then (res=> setToken(res.token))
        }
        if (!res.ok) {
            res.json()
            .then (res => checkError(res.error))
        }
    })
}



