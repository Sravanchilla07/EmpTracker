import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const RoleManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/auth/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.error(error));
    }, []);

    const updateRole = (id, role) => {
        axios.put(`/auth/users/${id}`, { role })
            .then(() => {
                setUsers(users.map(user => (user._id === id ? { ...user, role } : user)));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Role Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => updateRole(user._id, 'manager')}>Make Manager</button>
                                <button onClick={() => updateRole(user._id, 'employee')}>Make Employee</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoleManagement;
