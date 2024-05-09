import "./Budget.css";
import React, { useState } from 'react';

import ichi_plush from '../../assets/images/ichi_plush.png';
import { createBudget } from "../../services/apiCalls";


export const Budget = () => {
    const [email, setEmail] = useState('');
    const [withoutFace, setWithoutFace] = useState(false);
    const [animalEars, setAnimalEars] = useState(false);
    const [wings, setWings] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [reference, setReference] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createBudget({
                email,
                withoutFace,
                animalEars,
                wings,
                quantity
            });

            setTotalPrice(response.data.totalPrice);
            setReference(response.data.reference);
        } catch (error) {
            console.error('Error creating budget:', error);
        }
    };

    return(
        <div className='budgetDesign'>
            <div className="budgetTitle"> Presupuesto  </div>
            <div className='budgetCenter'>
                <div className='budgetImage'><img src={ichi_plush} /></div>
                <div className='budgetText'>
                <form onSubmit={handleSubmit}>
                    <div>Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div>Sin bordar cara:
                    <input type="checkbox" checked={withoutFace} onChange={e => setWithoutFace(e.target.checked)} />
                    </div>
                    <div>Orejas de animales:
                    <input type="checkbox" checked={animalEars} onChange={e => setAnimalEars(e.target.checked)} />
                    </div>
                    <div>Alas:
                    <input type="checkbox" checked={wings} onChange={e => setWings(e.target.checked)} />
                    </div>
                    <div>Cantidad de peluches:
                    <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} min="1" required /></div>
                    <button type="submit" onClick={handleSubmit}>Create Budget</button>
                </form>
                <div className="budgetMsg">{totalPrice > 0 && <div>Precio: {totalPrice} €</div>}
                {reference && <div>Código de referencia: {reference}</div>}</div>
                </div>
            </div>
        </div>
    )
};