import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Header() {
    const { user } = useContext(UserContext)

    if (!user) {
        const style = {
            border: '2px solid red',
            marginTop:'5px',
            padding: '10px',
            textAlign: 'center'
        };

        return (
            <div style={style}>
                Please login
            </div>
        );
    }

    return (
        <div>
            <center>
                <div style={{ border: '2px solid green', padding: '10px' }}>
                    Welcome {user.username} <br />
                    {/* <span>Password: {user.password}</span> */}
                </div>
            </center>
        </div>
    );
}

export default Header;

