import './Profile.css'

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";


export const  Profile = () => {

    const navigate = useNavigate();

    const [selectedProfile, setSelectedProfile] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('');


    const [user, setUser] = useState({
        username: '',
        email: '',
    });

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

    return (
        <>
            <div className='profileDesign'>
                <div className='profileTitle'>Profile</div>
                <div className='profileCenter'>
                    <select name="perfil" id="perfil" onChange={(e) => setSelectedProfile(e.target.value)}>
                        <option value="">Perfil</option>
                        {/* Aquí puedes añadir las opciones para el dropdown de Perfil */}
                    </select>
                    {selectedProfile && <div>{/* Aquí puedes mostrar más información sobre el perfil seleccionado */}</div>}

                    <div className='profileText'>
                        Username: {reduxUser.credentials.user.username}
                        Email: {reduxUser.credentials.user.email}
                    </div>

                    <select name="direcciones" id="direcciones" onChange={(e) => setSelectedAddress(e.target.value)}>
                        <option value="">Direcciones</option>
                        {/* Aquí puedes añadir las opciones para el dropdown de Direcciones */}
                    </select>
                    {selectedAddress && <div>{/* Aquí puedes mostrar más información sobre la dirección seleccionada */}</div>}

                    <select name="pedidos" id="pedidos" onChange={(e) => setSelectedOrder(e.target.value)}>
                        <option value="">Pedidos</option>
                        {/* Aquí puedes añadir las opciones para el dropdown de Pedidos */}
                    </select>
                    {selectedOrder && <div>{/* Aquí puedes mostrar más información sobre el pedido seleccionado */}</div>}
                </div>
            </div>
        </>
    );
}