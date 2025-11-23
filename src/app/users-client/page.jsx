'use client';

import {useEffect, useState} from "react";

export default function UsersClient() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: {error}</div>;
    } else {
        return (
            <div>
                <h1 className="text-center text-3xl font-bold my-4">
                    Users List
                </h1>
                <ul>
                    {users && users.map((user) => (
                        <li key={user.id} className="mb-2">
                            <strong>{user.name} ({user.username})</strong> - {user.email} | {user.phone}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}