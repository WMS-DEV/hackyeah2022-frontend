import {createContext, useContext, useState, useEffect} from "react";
import {useNavigate,  useLocation} from "react-router-dom";

const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const apiLink = 'https://donatenow-hackyeah.azurewebsites.net'
    const [token, setToken] = useState(() => localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [ loadingLogin, setLoadingLogin] = useState(false);

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    const auth = async () => {

        const data = await fetch(`${apiLink}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then((response)=>{
            console.log(response.headers.get('authorization'))
            setToken(response.headers.get('authorization'));
            // console.log(token)
            setLoadingLogin(false)
        return response.headers.get('authorization')
        })
    }

    const handleLogin = async (username, password) => {
        setLoadingLogin(true)
        await auth(username, password)
        //setToken('Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWNoYWwiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE2Njg4OTk4MjUsImV4cCI6MTY2OTQyMDgwMH0.iNC7RaSuG8g_WY_OIUULn4CwuF6J1kv5rJwAekKcnLoTdGjguA5Gsvm1-mbvILjwfEj-3-xj4a1J9lFcdIEpFw')
        const origin = location.state?.from?.pathname || '/user/dashboard';
        navigate(origin);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const value = {
        loadingLogin,
        setLoadingLogin,
        apiLink,
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onUsernameChange: handleUsernameChange,
        onPasswordChange: handlePasswordChange,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider