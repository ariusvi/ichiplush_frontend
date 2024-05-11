import './Profile.css'

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { createAddress } from '../../services/apiCalls';
import { getDefaultAddress } from '../../services/apiCalls';
import { getAddress } from '../../services/apiCalls';
import { updateAddress } from '../../services/apiCalls';
import { deleteAddress } from '../../services/apiCalls';
import { createOrder } from '../../services/apiCalls';
import { getOrders } from '../../services/apiCalls';
import { createReview } from '../../services/apiCalls'; // Import the createReview function



export const Profile = () => {

    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState('');
    const [addressData, setAddressData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        title: "",
        name: "",
        surname: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        isDefault: false
    });

    const [message, setMessage] = useState('');

    const reduxUser = useSelector(userData);

    if (!reduxUser.credentials.token) {
        throw new Error('No token provided');
    }
    const token = reduxUser.credentials.token;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [reduxUser])

    const handleButtonClick = (buttonName) => {
        if (showInfo === buttonName) {
            setShowInfo('');
        } else {
            setShowInfo(buttonName);
        }
    }

    useEffect(() => {
        if (showInfo === 'Direcciones') {
            getDefaultAddress(token)
                .then(data => setAddressData(data))
                .catch(error => console.error(error));
        }
    }, [showInfo]);



    const handleInputChange = (event) => {
        setNewAddress({
            ...newAddress,
            [event.target.name]: event.target.value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await createAddress(newAddress, token);
            setMessage('La dirección se ha guardado con éxito.');
            setTimeout(() => setMessage(''), 3000);
            setShowForm(false);
        } catch (error) {
            setMessage('Hubo un error al crear la dirección.');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const [showAddresses, setShowAddresses] = useState(false);
    const [showAddressIndex, setShowAddressIndex] = useState(null);
    const [addresses, setAddresses] = useState([]);


    const handleShowAddresses = () => {
        if (!showAddresses) {
            getAddress(token)
                .then(data => setAddresses(data))
                .catch(error => console.error(error));
        }
        setShowAddresses(!showAddresses);
    };

    const [editingAddressIndex, setEditingAddressIndex] = useState(null);
    const [editingAddress, setEditingAddress] = useState(null);

    const handleEditAddress = (index, address) => {
        setEditingAddressIndex(index);
        setEditingAddress(address);
    };

    const handleUpdateAddress = async (event) => {
        event.preventDefault();
        try {
            await updateAddress(editingAddress, token);
            const updatedAddresses = [...addresses.data];
            updatedAddresses[editingAddressIndex] = editingAddress;
            setAddresses({ data: updatedAddresses });
            setEditingAddressIndex(null);
            setEditingAddress(null);
        } catch (error) {
            setMessage('Hubo un error al actualizar la dirección.');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const handleEditingInputChange = (event) => {
        const { name, value, checked } = event.target;
        setEditingAddress(prevState => ({
            ...prevState,
            [name]: name === 'isDefault' ? checked : value
        }));
    };

    const handleDeleteAddress = async (address) => {
        try {
            await deleteAddress(token, address);
            const updatedAddresses = addresses.data.filter(a => a !== address);
            setAddresses({ data: updatedAddresses });
        } catch (error) {
            setMessage('Hubo un error al eliminar la dirección.');
            console.log(error, 'error');
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const [reference, setReference] = useState('');
    const [orderMessage, setOrderMessage] = useState('');


    const handleCreateOrder = async () => {
        try {
            const order = { reference };
            await createOrder(order, token);
            setReference('');
            setOrderMessage('Pedido creado con éxito.');
        } catch (error) {
            setOrderMessage('Hubo un error al crear el pedido.');
        }
        setTimeout(() => setOrderMessage(''), 3000);
    };

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const fetchedOrders = await getOrders(token);
            if (fetchedOrders && Array.isArray(fetchedOrders.data)) {
                setOrders(fetchedOrders.data);
            } else {
                console.error('Error: fetched orders is not an array');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);


    const [orderId, setOrderId] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState('');

    const handleReviewSubmit = async (event) => {
        event.preventDefault();
        const review = { orderId, text, rating };
        try {
            const response = await createReview(review, token);

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className='profileDesign'>
                <div className='profileTitle'>Tu área</div>
                <div className='profileCenter'>
                    <div className='profileDirections'>
                        <button onClick={() => handleButtonClick('Direcciones')}>Dirección Principal</button>
                        {showInfo === 'Direcciones' && addressData && (
                            <>
                                <div>
                                    <p>Titulo: {addressData.data.title}</p>
                                    <p>Nombre: {addressData.data.name}</p>
                                    <p>Apellidos: {addressData.data.surname}</p>
                                    <p>Telefono: {addressData.data.phone}</p>
                                    <p>Direccion: {addressData.data.street}</p>
                                    <p>Ciudad: {addressData.data.city}</p>
                                    <p>Provicia:{addressData.data.state}</p>
                                    <p>Pais: {addressData.data.country}</p>
                                    <p>Codigo Postal: {addressData.data.postalCode}</p>
                                </div>
                            </>
                        )}
                        {message && <div>{message}</div>}
                    </div>
                </div>

                <div className='profileAllAddresses'>
                    <button onClick={handleShowAddresses}>
                        {showAddresses ? 'Ocultar direcciones' : 'Mostrar direcciones'}
                    </button>
                    {showAddresses && Array.isArray(addresses.data) && addresses.data.map((address, index) => (
                        <div key={index}>
                            <button onClick={() => setShowAddressIndex(showAddressIndex === index ? null : index)}>
                                {address.title}
                            </button>
                            {showAddressIndex === index && (
                                <div>
                                    {editingAddressIndex === index ? (
                                        <form onSubmit={handleUpdateAddress}>
                                            <p>Título:<input
                                                name="title"
                                                value={editingAddress.title}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Nombre:<input
                                                name="name"
                                                value={editingAddress.name}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Apellidos: <input
                                                name="surname"
                                                value={editingAddress.surname}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Teléfono: <input
                                                name="phone"
                                                value={editingAddress.phone}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Dirección:<input
                                                name="street"
                                                value={editingAddress.street}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Ciudad: <input
                                                name="city"
                                                value={editingAddress.city}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Provincia: <input
                                                name="state"
                                                value={editingAddress.state}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>País: <input
                                                name="country"
                                                value={editingAddress.country}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Código Postal: <input
                                                name="postalCode"
                                                value={editingAddress.postalCode}
                                                onChange={handleEditingInputChange} /></p>
                                            <p>Direccion Principal:<input
                                                type="checkbox"
                                                name="isDefault"
                                                checked={editingAddress.isDefault}
                                                onChange={handleEditingInputChange}
                                            /></p>

                                            <p><button type="submit">Confirmar</button></p>
                                        </form>
                                    ) : (
                                        <>
                                            <p>Titulo: {address.title}</p>
                                            <p>Nombre: {address.name}</p>
                                            <p>Apellidos: {address.surname}</p>
                                            <p>Telefono: {address.phone}</p>
                                            <p>Direccion: {address.street}</p>
                                            <p>Ciudad: {address.city}</p>
                                            <p>Provicia:{address.state}</p>
                                            <p>Pais: {address.country}</p>
                                            <p>Codigo Postal: {address.postalCode}</p>
                                            <button onClick={() => handleEditAddress(index, address)}>Editar</button>
                                            <button onClick={() => handleDeleteAddress(address)}>Eliminar</button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='profileCreateAddress'>
                    <button onClick={() => setShowForm(!showForm)}>Crear dirección</button>
                    <div className='formDirection'>{showForm && (
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                Titulo:
                                <input name="title"
                                    value={newAddress.title}
                                    onChange={handleInputChange}
                                    placeholder="Título" />
                            </div>
                            <div>
                                Nombre:
                                <input name="name"
                                    value={newAddress.name}
                                    onChange={handleInputChange}
                                    placeholder="Nombre" />
                            </div>
                            <div>
                                Apellidos:
                                <input name="surname"
                                    value={newAddress.surname}
                                    onChange={handleInputChange}
                                    placeholder="Apellidos" />
                            </div>
                            <div>
                                Telefono:
                                <input name="phone"
                                    value={newAddress.phone}
                                    onChange={handleInputChange}
                                    placeholder="Teléfono" />
                            </div>
                            <div>
                                Direccion:
                                <input name="street"
                                    value={newAddress.street}
                                    onChange={handleInputChange}
                                    placeholder="Dirección" />
                            </div>
                            <div>
                                Ciudad:
                                <input name="city"
                                    value={newAddress.city}
                                    onChange={handleInputChange}
                                    placeholder="Ciudad" />
                            </div>
                            <div>
                                Provicia:
                                <input name="state"
                                    value={newAddress.state}
                                    onChange={handleInputChange}
                                    placeholder="Provincia" />
                            </div>
                            <div>
                                Pais:
                                <input name="country"
                                    value={newAddress.country}
                                    onChange={handleInputChange}
                                    placeholder="País" />
                            </div>
                            <div>
                                Codigo Postal:
                                <input name="postalCode"
                                    value={newAddress.postalCode}
                                    onChange={handleInputChange}
                                    placeholder="Código Postal" />
                            </div>
                            <div>
                                <label>
                                    Dirección predeterminada:
                                    <input
                                        type="checkbox"
                                        name="isDefault"
                                        checked={newAddress.isDefault}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div><button type="submit">Guardar</button></div>
                        </form>

                    )}</div></div>

                <div className='profileOrders'>
                    <button onClick={() => handleButtonClick('Pedidos')}>Pedidos</button>
                    {showInfo === 'Pedidos' && <div>
                        {orderMessage && <p>{orderMessage}</p>}
                        {orders.map(order => (
                            <div key={order.id}>
                                <p>ID pedido: {order.id}</p>
                                <p>Estado: {order.status}</p>

                            </div>
                        ))}
                    </div>}
                    <p><input
                        type="text"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        placeholder="Insertar referencia del pedido"
                    />
                        <button onClick={handleCreateOrder}>Crear pedido</button></p>
                    {orderMessage && <p>{orderMessage}</p>}

                </div>

                <div className='profileReview'>
                    <form onSubmit={handleReviewSubmit}>
                        <p>ID pedido:</p><input type='text' value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder='Order ID' />
                        <p>Opinión:</p><input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Review text' />
                        <p>Puntuación:</p><input type='number' value={rating} onChange={(e) => setRating(e.target.value)} placeholder='Rating' />
                        <p><button type='submit'>Publica tu opinión</button></p>
                    </form>
                </div>
            </div>
        </>
    );
}