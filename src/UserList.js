import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'

function UserList() {

   const [listOfUSer , setListOfUSer ] = useState([{}])
   
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setListOfUSer(res.data) )
        .catch(err=>err)
      }, [])
    
  return (
    <div style={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap"}}>{listOfUSer.map(el=> <UserCard user={el}/>)} </div>
  )
}

export default UserList