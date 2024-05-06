import './Footer.css'
import twitter from '../../../assets/images/SVG/twitter.svg'
import twitch from '../../../assets/images/SVG/twitch.svg'
import youtube from '../../../assets/images/SVG/youtube.svg'
import tiktok from '../../../assets/images/SVG/tiktok.svg'

export const Footer = () => {   


    return (
        <div className='footerDesign'>
            <div className='footerLinks'>Términos de servicio · Política de envío · F.A.Q. · Información de contacto </div>
            <div className='socialMedia'>
            <a href="https://twitter.com/VTichigo" target="_blank" rel="noopener noreferrer"><img src={twitter}/></a>
                <a href="https://twitch.tv/VTichigo" target="_blank" rel="noopener noreferrer"><img src={twitch}/></a>
                <a href="https://youtube.com/@vtichigo" target="_blank" rel="noopener noreferrer"><img src={youtube}/></a>
                <a href="https://tiktok.com/@VTichigo" target="_blank" rel="noopener noreferrer"><img src={tiktok}/></a>
            </div>
        </div>
    );
}