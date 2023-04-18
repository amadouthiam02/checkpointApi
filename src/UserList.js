import axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";

function UserList() {

    const [listOfUser, SetListOfUser] = useState([])
    const [error, SetError] = useState(null)
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')

    .then(response => {SetListOfUser(response.data)
        console.log (response.data)})

    .catch(error => {SetError(error)
        console.log(error)});
},[])
    return (
        <div>
            <ul>
            {listOfUser.map(user=>(
                <li> {user.name}</li>

            ))
            }
            </ul>
        </div>
    )
}

export default UserList
