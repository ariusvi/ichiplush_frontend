import "./SuperAdmin.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../app/slices/userSlice";

import { getUsers } from "../../services/apiCalls";
import { deleteUser } from "../../services/apiCalls";
import { getReviews } from "../../services/apiCalls";
import { getAllOrders } from "../../services/apiCalls";
import { updateOrder } from "../../services/apiCalls";
import { getItems } from "../../services/apiCalls";

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
            setUsers(Users.filter(user => user.id !== userId));
            setMessage("Usuario eliminado");
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            console.log(error);
        }
    };

    //--------------------USE EFFECT--------------------

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

    //--------------------REVIEWS--------------------
    const [reviews, setReviews] = useState([]);

    // if (reviews.length > 0) {
    //     console.log(reviews, "reviews");
    // } else {
    //     console.log("No reviews loaded yet");
    // }

    const fetchReviews = async () => {
        try {
            const response = await getReviews();
            if (response.success) {
                setReviews(response.data);
            } else {
                console.log(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    //--------------------ORDERS--------------------
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getAllOrders(token);
                if (data.success) {
                    setOrders(data.data);
                } else {
                    console.log(data.message);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchOrders();
    }, []);

    const [editingOrderId, setEditingOrderId] = useState(null);
    const [editingOrderStatus, setEditingOrderStatus] = useState('');

    const handleStatusChange = (event) => {
        setEditingOrderStatus(event.target.value);
    };

    const handleUpdateOrder = async () => {
        const updatedOrder = await updateOrder(token, { id: editingOrderId, status: editingOrderStatus });
        if (updatedOrder.success) {
            setOrders(orders.map(order => order.id === editingOrderId ? { ...order, status: editingOrderStatus } : order));
            setEditingOrderId(null);
            setEditingOrderStatus('');
        } else {
            console.log(updatedOrder.message);
        }
    };

    //--------------------CATALOGUE--------------------
    const [items, setItems] = useState([]);


    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await getItems();
                setItems(data.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        loadItems();
    }, []);


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
                </div>

                {/* --------------------------------- REVIEWS --------------------------- */}
                <div className="reviewsAdmin">
                    <div className="titleTable">REVIEWS</div>
                    {reviews.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Review</th>
                                    <th>Rating</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review, index) => (
                                    <tr key={index}>
                                        <td>{review.user}</td>
                                        <td>{review.text}</td>
                                        <td>{review.rating}</td>
                                        <td>{new Date(review.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No reviews</p>
                    )}
                </div>

                {/* --------------------------------- ORDERS --------------------------- */}
                <div className="ordersAdmin">
                    <div className="titleTable">ORDERS</div>
                    {orders && orders.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>User</th>
                                    <th>Budget</th>
                                    <th>Status</th>
                                    <th>Edit Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.id}</td>
                                        <td>{order.userId}</td>
                                        <td>{order.budgetId}</td>
                                        <td>
                                            {editingOrderId === order.id ? (
                                                <input type="text" value={editingOrderStatus} onChange={handleStatusChange} />
                                            ) : (
                                                order.status
                                            )}
                                        </td>
                                        <td>
                                            {editingOrderId === order.id ? (
                                                <button onClick={handleUpdateOrder}>Save</button>
                                            ) : (
                                                <button onClick={() => { setEditingOrderId(order.id); setEditingOrderStatus(order.status); }}>Edit</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No orders</p>
                    )}
                </div>

                {/* --------------------------------- CATALOGUE --------------------------- */}
                <div className="catalogueAdmin">
                    <div className="titleTable">CATALOGUE</div>
                    {items && items.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>URL image</th>

                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.image}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No items</p>
                    )}
                </div>
            </div>
        </>
    );
}