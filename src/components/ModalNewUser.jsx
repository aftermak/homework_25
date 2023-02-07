import React, { useEffect, useState } from "react";
import { initialUser } from './initialUser.js'
import {useDispatch, useSelector} from "react-redux";
import {btnCreate, createFlags, createModal} from "./Redux/actions";
import { addUser } from "./Redux/action.fetch";

export function ModalNewUser ({ isOpen }) {

    const [newUser, setNewUser] = useState(initialUser);

    const state = useSelector(state => state)
    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(btnCreate(true))
        dispatch(createModal(false))
        setNewUser(initialUser)
    } 

    const onFirstNameInputChange = (e) => {
        setNewUser({
            ...newUser,
            first_name: e.target.value
        })
    }

    const onLastNameInputChange = (e) => {
        setNewUser({
            ...newUser,
            last_name: e.target.value
        })
    }

    const onEmailInputChange = (e) => {
        setNewUser({
            ...newUser,
            email: e.target.value
        })
    }

    useEffect(()=>{
        if(newUser.first_name.trim() && newUser.last_name.trim() && newUser.email.trim()){
            dispatch(btnCreate(false))} else{
            dispatch(btnCreate(true))
        }
    },[newUser])

    return (
       <div className="backdrop">
            <div className="modal-body">
                <button className="close" onClick={()=>{dispatch(createModal(false))}}>&times;</button>
                <div className="logo"></div>
                <div className="title">New User</div>

                <form onSubmit={onSubmit}>
                    <div className="inputs">
                        <label>FIRST NAME</label>
                        <input type="text" placeholder="Input First Name" onChange={onFirstNameInputChange} />
                        <label>LAST NAME</label>
                        <input type="text" placeholder="Input Last Name" onChange={onLastNameInputChange} />
                        <label>EMAIL</label>
                        <input type="email" placeholder="Input EMAIL" onChange={onEmailInputChange}/>
                    </div>
                    <button disabled={state.flags.btnCreate} onClick={()=>{dispatch(addUser(newUser))}}>CREATE</button>
                </form>

            </div>
       </div>

            
  
     
    
        
        
       )
    
}

