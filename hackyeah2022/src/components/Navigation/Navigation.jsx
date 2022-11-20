import {NavLink} from "react-router-dom";
import {useAuth} from "../Authentication/AuthProvider";
import {Link} from "react-router-dom";

const Navigation = () => {

    const { token, onLogout } = useAuth()

    return(
        <nav>
            <Link to='/user/home'>Home</Link>
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