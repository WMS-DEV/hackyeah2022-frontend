import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/App/Dashboard/Dashboard";
import Preferences from "./components/App/Preferences/Preferences";
import LoginPage from "./components/App/Login/LoginPage";
import useToken from "./useToken";
import {useEffect} from "react";

function App() {

    const { token, setToken } = useToken();

    useEffect(()=>{console.log(`TO JEST TOKEN: ${token}`)}, [token])

    if(!token) {
        return <LoginPage setToken={setToken} />
    }
    return (
        <>
            <div className="wrapper">
                <h1>Application</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/preferences" element={<Preferences/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
