import { useEffect } from "react";

import { useUsersSelector, useUsersStatus, useFetchUsers } from "./state/hooksUs";
import { useFilterAuthor } from "../features/state/hooks";


const UserList = () => {

    const users = useUsersSelector();    //(state => state.postsReducer.posts)
    const status = useUsersStatus();   //(state => state.postsReducer.status)

    const callFetchUsers = useFetchUsers()
    const callFilterAuthor = useFilterAuthor()
    
    useEffect(() => {
        callFetchUsers()
    }, [])

    if(status === 'loading') return <h2>Loading...</h2>
    
    
    if(status === 'failed') return <h2>Cant get users...</h2>

    return (
        <>
           <h2>Users</h2>
            <select onChange={(e)=> callFilterAuthor()}>
                    <option value={-1}> Select Author...</option>
                    {users.map((user) => {
                        return (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        )
                    })}
            </select>
        </>
    );
}

export default UserList