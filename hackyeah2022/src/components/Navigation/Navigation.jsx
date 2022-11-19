import {NavLink} from "react-router-dom";
import {useAuth} from "../Authentication/AuthProvider";

const Navigation = () => {

    const { token, onLogout } = useAuth()

    return(
        <nav>
            <NavLink to='/user/home'>Home</NavLink>
            <NavLink to="/user/dashboard">Dashboard</NavLink>
            <NavLink to="/user/preferences">Preferences</NavLink>
            <NavLink to="/user/login">LoginnnPage</NavLink>
            <NavLink to="/user/charity-registration">Charity Registration</NavLink>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}

        </nav>
    )
}

export default Navigation