import {API_URL} from "../Const";

export const getUsers = (page) => {
    return async dispatch => {
        const response = await fetch(API_URL + `users?page= ${page}` )
        const data = await response.json()
        dispatch({ type: "GET_DATA", payload: data})
    }
}
export const deleteUser = (id) => {
    return async dispatch => {
        const response = await fetch(API_URL + `users/${id}`,
            {method: 'DELETE' })
        const res = await response
        if (res.status == 204) {
            dispatch({ type: "USER_DELETE", payload: id})
        } else {
            console.log('User not found');
        }
    }
}

export const addUser = (user) => {
    return async dispatch => {
        const response = await fetch(API_URL + 'users',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const res = await response.json()
        if (res.status == 201) {
            console.log(res)
            // dispatch({ type: "USER_ADD", payload: id})
        } else {
            console.log('User not found');
        }
    }
}

    // export function UpdateAPI (id, user, changeUser) {
    //     fetch(API_URL + `users/${id}`, {
    //
    //         method: 'PUT',
    //
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //
    //         body: JSON.stringify(user)
    //     })
    //         .then (res => {
    //             if (res.status == 200) {
    //                 res.json()
    //                     .then (newUser => changeUser(id, newUser))
    //             } else {
    //                 console.log('User not found');
    //             }
    //         })
    // }
