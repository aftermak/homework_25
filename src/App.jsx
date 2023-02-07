import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAPI, DeleteAPI, UpdateAPI } from "./components/API";
import { CardUserContainer } from "./containers";
import { ModalNewUser, ModalUpdate } from "./components";
import {
    createModal,
    getToken,
    updateModal,
    setTotalPage,
    pageDefault,
    pageIncrement, pageDecrement
} from "./components/Redux/actions";
import { getUsers } from "./components/Redux/action.fetch";
import {LoginForm} from "./components/Login";
export default function App () {

    const [id, setId] = useState('');
    const [users, setUsers] = useState([]);
    const [modUser, setModUser] = useState([]);

    const state = useSelector(state=>state)
    const dispatch = useDispatch()


    // const addUser = (newUser) => setUsers([...users, newUser]);

    // const removeUser = (id) => setUsers(users.filter(user => user.id !== id));

    // const deleteUser = (id) => {DeleteAPI(id, removeUser)};

    const updateUser = (id) => {
        const user = users.filter(user => user.id == id)
        setModUser(...user)
        dispatch(updateModal(true))
        setId(id)
    }

    const modifyUser = (user) => {UpdateAPI(id, user, changeUser)}

    const changeUser = (id, newUser) => {
        setUsers(users.map(user => {
            if(user.id == id){
                return newUser
            }
            return user
        }));
    }

    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(pageDefault(1))
        dispatch(getToken(localStorage.getItem('token')))
    }
    const buttonPageHandler = e => {
        switch (e.target.name) {
            case 'next':
                if (state.flags.page != state.flags.totalPages) {
                    dispatch(pageIncrement())
                }
            case 'prev':
                if(state.flags.page !== 1){
                    dispatch(pageDecrement())
                }
        }
    }

    useEffect (()=> {dispatch(getUsers(state.flags.page))},[state.flags.page])
 
    return (
        <>
            {!state.flags.token
                ? <LoginForm />
                : <div className="wrapper">
                    <div className="header">

                        <button className="logoutBtn" onClick={()=>{dispatch(createModal(true))}}>New User</button>
                        <button onClick={buttonPageHandler} name={'prev'}>Previous Page</button>
                        <button onClick={buttonPageHandler} name={'next'}>Next Page</button>
                        <button className="logoutBtn" onClick={logOut}>Logout</button>

                    </div>

                    <CardUserContainer operations={{updateUser}} />

                    {state.flags.create && (<ModalNewUser />)}
                    {state.flags.update && (<ModalUpdate modUser={modUser}  modifyUser={modifyUser} />)}
                </div>
            }
        </>
    )
};

