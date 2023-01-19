import { useContext, useEffect } from "react"
import { db } from "./FirebaseConfig"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { UserContext } from "./Helpers/ContextProvider"


export function WaitlistForm() {
    const { users } = useContext(UserContext)
    const { setUsers } = useContext(UserContext)
    const { email } = useContext(UserContext)
    const { setNewEmail } = useContext(UserContext)
    const { newName } = useContext(UserContext)
    const { setNewName } = useContext(UserContext)
    const UserCollectionRef = collection(db, "users")

    useEffect(() => {
        const GetUsers = async () => {
            const data = await getDocs(UserCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        GetUsers()
    },);

    const CreateUser = async () => {
        await addDoc(UserCollectionRef, { name: newName, mail: email })
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '14%', gap: '1em' }}>
            <input type="email" placeholder="please input your email" onChange={(e) => {
                setNewEmail(e.target.value)
            }} />
            <input type="text" placeholder="input your username" onChange={(e) => {
                setNewName(e.target.value)
            }} />
            <button onClick={() => CreateUser()}>Create User</button>

            <hr />

            <h2>This is going be the magical ground you know what I mean</h2>

            {users.map((newUsers) => {
                return (
                    <div key={newUsers.id}>
                        <p>emails: {newUsers.mail}</p>
                        <p>UserNames: {newUsers.name}</p>

                    </div>
                )
            })}

        </div>
    )
}