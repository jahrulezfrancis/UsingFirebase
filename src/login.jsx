import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "./Helpers/ContextProvider"




export function LoginForm() {
    const { users } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')

    function CredientialCheck() {
        if (email === users.mail && userName === users.name) {
            Navigate("/homepage")
        } else {
            alert('your username and email is not correct')
        }
    }

    function setMail(e) {
        setEmail(e.target.value)
    }

    function setName(e) {
        setName(e.target.value)
    }

    return (
        <>
            <div className="loginForm">
                <input type="email" placeholder="please enter your email" onChange={setMail} />
                <input type="text" placeholder="please enter your username" onChange={setName} />
            </div>
        </>
    )
}