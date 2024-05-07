import './Register.css'
import { CustomInput } from '../../components/common/CustomInput/CustomInput';
import registerButton from '/src/assets/images/SVG/registerButton.svg';

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { registerUser } from '../../services/apiCalls';

export const Register = () => {

    const register = useSelector(state => state.user.register)
    const error = useSelector(state => state.user.error)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        userName: '',
        password: '',
        email: ''
    });

    const [userError, setUserError] = useState({
        userName: '',
        password: '',
        email: ''
    })

    const [msgError, setMsgError] = useState('')

    const inputHandler = (e) => {
        setUser(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }

    const registerMe = async () => {

        try {

            const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            const usernameRegex = /^[\w]{3,25}$/;
            const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,30}$/;

            if (!user.userName.match(usernameRegex)) {
                throw new Error('Username must be between 3 and 25 characters')
            }

            if (!user.email.match(validEmail)) {
                throw new Error('Invalid email')
            }

            if (!user.password.match(passwordRegex)) {
                throw new Error('Password must be between 10 and 30 characters. It must include at least one uppercase letter, one number, and one special character')
            }

            for (let element in user) {
                if (user[element] === '') {
                    throw new Error('All fields are required')
                }
            }

            const fetched = await registerUser(user);
            if (fetched) {
                setSuccessMessage("Registro realizado con éxito");
            }
            if (!fetched.success) {
                throw new Error(fetched.message)
            }

            setMsgError(fetched.message);

            setTimeout(() => { navigate("/login") }, 820)

        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <>
            <div className='registerDesign'>
                <div className='registerTittle'> Registrate </div>
                <div className='registerCenter'>
                    Username:
                    <CustomInput
                        className="inputDesign"
                        type="userName"
                        name="userName"
                        value={user.userName || ""}
                        placeholder="username"
                        changeEmit={inputHandler}
                    />
                    <div className='error'>{userError.nameError}</div>
                    Email:
                    <CustomInput
                        className="inputDesign"
                        type="email"
                        name="email"
                        value={user.email || ""}
                        placeholder="email"
                        changeEmit={inputHandler}
                    />
                    <div className='error'>{userError.emailError}</div>
                    Password:
                    <CustomInput
                        className="inputDesign"
                        type="password"
                        name="password"
                        value={user.password || ""}
                        placeholder="password"
                        changeEmit={inputHandler}
                    />
                    <div className='error'>{userError.passwordError}</div>
                </div>
                <div className='registerButton'>
                    <img src={registerButton} onClick={registerMe} alt='registerButton' />
                </div>
                <div className='error'>{errorMessage}</div>
                <div className='success'>{successMessage}</div>
            </div>
        </>
    )
}