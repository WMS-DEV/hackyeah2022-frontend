import React from 'react';
import { useAuth } from '../../Authentication/AuthProvider'

export default function Preferences() {

    const { token } = useAuth();

    return (
        <>
            <h2>Preferences</h2>
            <h1>Token: {token}</h1>
        </>
    );
}