import { useContext, useState } from "react"
import { UserContext } from "./Helpers/ContextProvider"




export function LoginForm() {
    const { users } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')

    function CredientialCheck() {
        users.map((user) => {
            (email === user.mail && userName === user.name) ? alert('yeah boy this is right') : alert('not at all please try again');
            return(
                <h1>This is not really good</h1>
            )
        })
    }

    function setMail(e) {
        setEmail(e.target.value)
        e.preventDefault()
    }

    function setName(e) {
        setUserName(e.target.value)
        e.preventDefault()
    }

    return (
        <>
            <div className="loginForm">
                <input type="email" value={email} placeholder="please enter your email" onChange={setMail} />
                <input type="text" value={userName} placeholder="please enter your username" onChange={setName} />
                <button onClick={CredientialCheck}>Login</button>
            </div>
        </>
    )
}