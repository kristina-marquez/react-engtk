import React from 'react';
import { useUsers } from '../hooks/useUsers';

export const UserPage = () => {

    const { users } = useUsers();
    return (
        <div className='mt-5'>
            <h1>Users</h1>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            //return Implicito
                            <tr key={user.email}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.last_name}</td>
                                <td>
                                    <img
                                        src={user.avatar}
                                        className="img-thumbnail"
                                        style={{
                                            width: 50
                                        }}
                                    />
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
