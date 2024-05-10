import { useNavigate } from 'react-router-dom';
import './Header.css';
import { CustomLink } from '../CustomLink/CustomLink';
import { logout, userData } from '../../../app/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

export const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout({ credentials: ""}))
        navigate('/home')
    }

    //redux to read mode
    const reduxUser = useSelector(userData)

    //redux to write mode
    const dispatch = useDispatch();

    useEffect(() => {}, [reduxUser])

    const [criteria, setCriteria] = useState("")

    const searchHandler = (e) => {
        setCriteria(e.target.value)
    }

    useEffect(() => {
        if (criteria !== "") {
            navigate(`/search/${criteria}`)
        }
    } 
    ,[criteria])


    return (
        <div className='headerDesign'>
            <CustomLink title="HOME" destination="/" />
            <CustomLink title="EJEMPLOS" destination="/examples" />
            <CustomLink title="PRESUPUESTO" destination="/budget" />
            <CustomLink title="OPINIONES" destination="/reviews" />
            {reduxUser?.credentials?.token
            ? (
                <>
                    <CustomLink title={reduxUser.credentials.username} destination="/profile" />
                    <div className='outDesign' onClick={handleLogout}>LOGOUT</div>
                </>
            )
            : (
                <>
                <CustomLink title="REGISTER" destination="/register" />
                <CustomLink title="LOGIN" destination="/login" />
            </>
            )}
            {/* - PRESUPUESTO - EJEMPLOS - OPINIONES - REGISTRO */}
        </div>
    );
}
