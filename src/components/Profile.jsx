import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Profile() {

    const { user } = useContext(UserContext)
   
    if (!user) return <div><center>Please login </center></div>
    return <div><center>welcome {user.username} <br />
    <span>Password: {user.password}</span></center></div>
}

export default Profile
