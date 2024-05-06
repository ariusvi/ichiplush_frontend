import React from 'react';
import './Home.css';
import homeImage from '../../assets/images/img_home.png';
import ichigo_logo from '../../assets/images/ichigo_logo.png';


export const Home = () => {
    return (
        <>
            <div className='homeDesign'>
                <img src={ichigo_logo} alt="Ichigo Logo" className='logo' />
            <div className='homeCenter'> 
                <div className='ichigoHome'><img src={homeImage} alt="Home" /></div>
                <div className='homeText'>Bienvenidos a todos. Soy Ichigo Higashikata, una Vtuber, diseñadora de moda y artesana.
                Aquí podrás encontrar todas mis redes sociales y toda la información sobre mis comisiones de peluches.
                
                Confecciono peluches realizados a mano de forma personalizada y única. Pueden ser tanto de vtubers, personas reales (en formatochibi) o de personajes de anime, videojuegos o literatura.</div>
            </div>
            </div>
        </>
    );
}