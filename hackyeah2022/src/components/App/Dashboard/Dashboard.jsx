import React from 'react';
import { useAuth } from '../../Authentication/AuthProvider'

export default function Dashboard() {

    const { token } = useAuth();

    return (
        <>
            <h2>Dashboard</h2>
            <h1>Token: {token}</h1>
        </>
    );
}