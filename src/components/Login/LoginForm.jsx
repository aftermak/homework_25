import React, {useState, Fragment} from "react";
import { LoginFormSubmit } from "./LoginFormSubmit";
import {useDispatch, useSelector} from "react-redux";
import {btnLogin, errorLogin, getToken} from "../Redux/actions";
import { LoginError } from "../Login"


export function LoginForm () {

    const [user, setUser] = useState({email:'',password:''});

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        LoginFormSubmit(user, checkError, setToken);
    }
    const setToken = (token) => {
        localStorage.setItem('token', token)
        dispatch(getToken(localStorage.getItem('token')))
    }
    const checkError = (error) => {
        dispatch(errorLogin(error))
    }
    const inputChangeHandler = e => {
        switch (e.target.name) {
            case 'email':
                if (e.target.value) {
                    dispatch(btnLogin(false))
                }else {dispatch(btnLogin(true))}
                setUser(
                    {
                        ...user,
                        email: e.target.value
                    }
                )
                break
            case 'pass':
                setUser({
                        ...user,
                        password: e.target.value
                    }
                )
                break
        }
    }

    return (
        <Fragment>
            <div className="modal-body">
                <div className="login"></div>

                    <form onSubmit={onSubmit}>
                        <div className="inputs">
                            <label>LOGIN</label>
                            <input type="email" placeholder="Enter Login" onChange={inputChangeHandler} name={"email"} />
                            <label>PASSWORD</label>
                            <input type="password" placeholder="Enter Password" onChange={inputChangeHandler} name={"pass"} />
                        </div>
                        <LoginError error={state.error.error}  />
                        <button disabled={state.flags.btnLogin}>Login</button>
                    </form>

                </div>
        </Fragment>     
    )
}

