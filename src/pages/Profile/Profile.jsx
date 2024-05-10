import './Profile.css'

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAddress } from '../../services/apiCalls';
import { createAddress } from '../../services/apiCalls';


export const Profile = () => {

    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState('');
    const [addressData, setAddressData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        title: '',
        name: '',
        surname: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
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
            getAddress(token)
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


    return (
        <>
            <div className='profileDesign'>
                <div className='profileTitle'>Tu área</div>
                <div className='profileCenter'>
                    <button onClick={() => handleButtonClick('Direcciones')}>Direcciones</button>
                    {showInfo === 'Direcciones' && addressData && (
                        <>
                            <div>
                                <p>Titulo: {addressData.data[0].title}</p>
                                <p>Nombre: {addressData.data[0].name}</p>
                                <p>Apellidos: {addressData.data[0].surname}</p>
                                <p>Telefono: {addressData.data[0].phone}</p>
                                <p>Direccion: {addressData.data[0].street}</p>
                                <p>Ciudad: {addressData.data[0].city}</p>
                                <p>Provicia:{addressData.data[0].state}</p>
                                <p>Pais: {addressData.data[0].country}</p>
                                <p>Codigo Postal: {addressData.data[0].postalCode}</p>
                            </div>
                            <button onClick={() => setShowForm(true)}>Crear dirección</button>
                            <div className='formDirection'>{showForm && (
                                <form onSubmit={handleFormSubmit}>
                                    <div>Titulo:<input name="title" value={newAddress.title} onChange={handleInputChange} placeholder="Title" /></div>
                                    <div>Nombre: <input name="name" value={newAddress.name} onChange={handleInputChange} placeholder="Name" /></div>
                                    <div>Apellidos: <input name="surname" value={newAddress.surname} onChange={handleInputChange} placeholder="Surname" /></div>
                                    <div>Telefono:<input name="phone" value={newAddress.phone} onChange={handleInputChange} placeholder="Phone" /></div>
                                    <div>Direccion:<input name="street" value={newAddress.street} onChange={handleInputChange} placeholder="Street" /></div>
                                    <div>Ciudad:<input name="city" value={newAddress.city} onChange={handleInputChange} placeholder="City" /></div>
                                    <div>Provicia:<input name="state" value={newAddress.state} onChange={handleInputChange} placeholder="State" /></div>
                                    <div>Pais:<input name="country" value={newAddress.country} onChange={handleInputChange} placeholder="Country" /></div>
                                    <div>Codigo Postal:<input name="postalCode" value={newAddress.postalCode} onChange={handleInputChange} placeholder="Postal Code" /></div>
                                    <div><button type="submit">Guardar</button></div>
                                </form>

                            )}</div>
                        </>
                    )}
                    {message && <div>{message}</div>}
                    <button onClick={() => handleButtonClick('Pedidos')}>Pedidos</button>
                    {showInfo === 'Pedidos' && <div>PEDIDOS BLAH BLAH BLAH</div>}
                </div>
            </div>
        </>
    );
}