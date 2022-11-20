import React from 'react';
import { useAuth } from '../../Authentication/AuthProvider'

export default function Dashboard() {

    const { token } = useAuth();

    return (
        <></>
    );
}