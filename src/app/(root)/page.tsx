import {GET} from "@/app/lib/db";

interface User{
    id:number,
    name: string,
    age:number,
}

export default async function Home() {
    const users = await GET<User>('SELECT * FROM users',[])
    return (
        <section>
            <h1>Home page</h1>
            <ul>
                {users.map((user: User) => {
                    return <li key={user.id}>{user.name}, {user.age}</li>
                })}
            </ul>
        </section>
    );
}