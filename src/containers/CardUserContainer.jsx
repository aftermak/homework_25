import React from "react";
import { CardUser } from "../containers";
import {useSelector} from "react-redux";

export function CardUserContainer ({ operations }) {
    const state = useSelector(state => state.users)
   return(
         <div className="container">{state.userList.map( user => (
               <CardUser user={user} key={user.id} operations={operations} />
               ))}
         </div>
   )
};
