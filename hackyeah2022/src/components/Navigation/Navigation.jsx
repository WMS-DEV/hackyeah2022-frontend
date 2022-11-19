import {NavLink} from "react-router-dom";
import {useAuth} from "../Authentication/AuthProvider";

const Navigation = () => {

    const { token, onLogout } = useAuth()

    return(
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/preferences">Preferences</NavLink>
            <NavLink to="/charity-registration">Charity Registration</NavLink>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}

        </nav>
    )
}

export default Navigation