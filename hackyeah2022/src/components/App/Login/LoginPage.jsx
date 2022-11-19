import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
const apiLink = 'https://donatenow-hackyeah.azurewebsites.net'

export default function LoginPage({setToken}) {

    async function loginUser (credentials) {
        const data = await fetch(`${apiLink}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        return(data.headers.get('authorization'))
    }


    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const fetchToken = await loginUser({
            username,
            password
        });
        console.log(fetchToken)
        setToken(fetchToken);
    }

    return (
        <>
            <div className="login-page">
                <div className='login-box'>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                </div>


            </div>
        </>
    )
}

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}