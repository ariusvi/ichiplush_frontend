import "./SuperAdmin.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../app/slices/userSlice";

import { getUsers } from "../../services/apiCalls";
import { deleteUser } from "../../services/apiCalls";

export const SuperAdmin = () => {

    const navigate = useNavigate()

    //reduxe to read mode
    const reduxUser = useSelector(userData);
    const token = reduxUser.credentials.token || ({});

    //----------------SUPERADMIN----------------

    useEffect(() => {
        if (reduxUser.credentials.user.role !== "super_admin") {
            navigate('/home');
        }
    }, [reduxUser, navigate]);

    //--------------------GET USERS--------------------

    const [Users, setUsers] = useState([]);
    const [message, setMessage] = useState(null);

    const allUsers = async () => {
        try {
            const fetched = await getUsers(token)
            setUsers(fetched.data)
        } catch (error) {
            console.log(error)
        }
    }

    //--------------------DELETE USER--------------------
    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(token, userId);
            setUsers(Users.filter(user => user.id !== userId)); // Update Users state
            setMessage("Usuario eliminado"); // Set the message
            setTimeout(() => setMessage(null), 3000); // Remove the message after 3 seconds
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (Users.length === 0) {
            allUsers()
        }
    }, [Users, token]);

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser]);


    return (
        <>
            <div className="superadminDesign">
                <div className="adminTitle">Área SuperAdmin</div>
                <div className="adminCenter">
                    {/* --------------------------------- USERS --------------------------- */}
                    <div className="usersAdmin">
                        <div className="titleTable">USERS</div>
                        {message && <div className="message">{message}</div>}
                        {Users.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>is Active</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.roleId}</td>
                                            <td>{user.isActive ? 'True' : 'False'}</td>
                                            <td>
                                                <button onClick={() => handleDeleteUser(user.id)}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No users</p>
                        )}
                    </div>
                </div>,
            </div>
        </>
    );
}