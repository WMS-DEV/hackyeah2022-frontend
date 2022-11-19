import {createContext, useContext, useState} from "react";
import {useNavigate,  useLocation} from "react-router-dom";

const AuthContext = createContext(null);

const apiLink = 'https://donatenow-hackyeah.azurewebsites.net'

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const auth = async (username, password) => {
        const data = await fetch(`${apiLink}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": "michal", "password": "root"})
        }).then((response)=>{
            console.log(response.headers.get('authorization'))
            setToken(response.headers.get('authorization'));
        return response.headers.get('authorization')
        })
    }

    const handleLogin = async (username, password) => {
        await auth(username, password)
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