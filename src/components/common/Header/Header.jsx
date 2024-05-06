import { useNavigate } from 'react-router-dom';
import './Header.css';
import { CustomLink } from '../CustomLink/CustomLink';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='headerDesign'>
            <CustomLink title="HOME" destination="/" />
            - PRESUPUESTO - EJEMPLOS - OPINIONES - REGISTRO
            <CustomLink title="LOGIN" destination="/login" />
        </div>
    );
}