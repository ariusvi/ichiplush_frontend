import { CustomInput } from '../../components/common/CustomInput/CustomInput';
import './Login.css';
import React from 'react';
import login from '../../assets/images/SVG/login.svg'


export const Login = () => {
    return (
        <div className='loginDesign'>
            <div className='loginTitle'>Iniciar Sesión</div>
            <div className='loginCenter'>
                <div className='loginForm'>
                    email:
                    <CustomInput
                        className='inputDesign'
                        type='text'
                        placeholder='email' />
                    contraseña:
                    <CustomInput
                        className='inputDesign'
                        type='password'
                        placeholder='contraseña' />
                </div>
            </div>
            <div className='loginButton'><img src={login} alt='login'/></div>
        </div>
    )
}