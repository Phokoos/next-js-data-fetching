export default async function UsersServerPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
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