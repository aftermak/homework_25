import React from "react";
import {useDispatch} from "react-redux";
import {deleteUser} from "../Redux/action.fetch";

export function CardButtons ({id, operations}) {
    const dispatch = useDispatch();
        return (
        <>
            <button className="delete" onClick={() =>{dispatch(deleteUser(id))}}>&times;</button>
            <button className="update" onClick={() => {dispatch(updateUser(id))}}>Update</button>
        </>
            
    )      
}
