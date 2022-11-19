import {useAuth} from "../../Authentication/AuthProvider";

const Home = () => {

    const { onLogin } = useAuth();


    return (
        <>
            <h1>Home</h1>

            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </>
    )
}

export default Home