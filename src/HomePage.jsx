import { UserProvider } from "./Helpers/ContextProvider";
import { WaitlistForm } from "./Form";
import { LoginForm } from "./login";
export default function HomePage() {
    return (
        <div className="homePage">
            <UserProvider>
                <WaitlistForm />
                <LoginForm />
            </UserProvider>
        </div>
    )
}