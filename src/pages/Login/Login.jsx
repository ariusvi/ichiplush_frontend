import { CustomInput } from '../../components/common/CustomInput/CustomInput';
import './Login.css';
import React, { useState } from 'react';
import loginButton from '../../assets/images/SVG/loginButton.svg'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/apiCalls';

//redux
import { useDispatch } from 'react-redux';
import { decodeToken } from 'react-jwt';
import { login } from '../../app/slices/userSlice';


export const Login = () => {

    const navigate = useNavigate();

    //redux to write mode
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const loginMe = async () => {
        const fetched = await loginUser(user);

        if (fetched.token) {
            const decoded = decodeToken(fetched.token);

            const passport = {
                token: fetched.token,
                user: decoded
            };

            dispatch(login({credentials: passport}))
            setTimeout(() => {navigate('/home')}, 500)
        }
    }


    return (
        <div className='loginDesign'>
            <div className='loginTitle'>Iniciar Sesión</div>
            <div className='loginCenter'>
                <div className='loginForm'>
                    email:
                    <CustomInput
                        className="inputDesign"
                        type="email"
                        name="email"
                        value={user.email || ""}
                        placeholder="email"
                        changeEmit={inputHandler}
                    />
                    contraseña:
                    <CustomInput
                        className="inputDesign"
                        type="password"
                        name="password"
                        value={user.password || ""}
                        placeholder="password"
                        changeEmit={inputHandler} 
                        />
                </div>
            </div>
            <div className='loginButton' onClick={loginMe}><img src={loginButton} alt='login'/></div>
        </div>
    )
}