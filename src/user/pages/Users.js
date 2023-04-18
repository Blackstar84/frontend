import React from "react";
import UsersList from "../components/UsersList";

const Users = () =>{
    const USERS = [
        {id: 'u1', name: 'Max Schwarz',
         image: 'https://www.visittheusa.co/sites/default/files/styles/16_9_1280x720/public/2016-10/0%20HERO_HoustonTX_GettyImages-532390052_0.jpg?h=c5520b1b&itok=QYZzO_gS',
          places: 3 }
        ];
    return(
        <UsersList items={USERS} />
    )
}

export default Users;