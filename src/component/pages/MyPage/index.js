import React, {useContext} from 'react'
import {UserContext} from "../context/UserNameContext"
import {TokenContext} from "../context/TokenContext"
function MyPage() {
    const {username} = useContext(UserContext);
    const {token} = useContext(TokenContext); 
    return (
        <div>
            <div>{localStorage.getItem("token")}</div>
            <div>{localStorage.getItem("username")}</div>
        </div>
    )
}

export default MyPage
