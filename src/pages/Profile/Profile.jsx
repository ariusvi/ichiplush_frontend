import './Profile.css'

import { useNavigate } from 'react-router-dom';
import { updated, userData } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAddress } from '../../services/apiCalls';


export const Profile = () => {

    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState('');
    const [addressData, setAddressData] = useState(null);

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

    console.log(addressData, 'addressData');

    return (
        <>
            <div className='profileDesign'>
                <div className='profileTitle'>Tu área</div>
                <div className='profileCenter'>
                    <button onClick={() => handleButtonClick('Direcciones')}>Direcciones</button>
                    {showInfo === 'Direcciones' && addressData && (
                        <div>
                            <p>Title: {addressData.data[0].title}</p>
                            <p>Name: {addressData.data[0].name}</p>
                            <p>Surname: {addressData.data[0].surname}</p>
                            <p>Phone: {addressData.data[0].phone}</p>
                            <p>Street: {addressData.data[0].street}</p>
                            <p>City: {addressData.data[0].city}</p>
                            <p>State: {addressData.data[0].state}</p>
                            <p>Country: {addressData.data[0].country}</p>
                            <p>Postal Code: {addressData.data[0].postalCode}</p>
                        </div>
                    )}

                    <button onClick={() => handleButtonClick('Pedidos')}>Pedidos</button>
                    {showInfo === 'Pedidos' && <div>PEDIDOS BLAH BLAH BLAH</div>}
                </div>
            </div>
        </>
    );
}