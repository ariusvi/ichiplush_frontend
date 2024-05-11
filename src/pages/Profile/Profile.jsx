import './Profile.css'

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAddress } from '../../services/apiCalls';
import { createAddress } from '../../services/apiCalls';
import { getDefaultAddress } from '../../services/apiCalls';

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

    console.log(addressData, "addressData");

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

                <div className='profileOrders'><button onClick={() => handleButtonClick('Pedidos')}>Pedidos</button>
                    {showInfo === 'Pedidos' && <div>PEDIDOS BLAH BLAH BLAH</div>}</div>
            </div>
        </>
    );
}