import { getItems } from "../../services/apiCalls";
import "./Catalogue.css";
import { useEffect, useState } from "react";


export const Catalogue = () => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getItemsData = async () => {
            try {
                const fetched = await getItems();
                setItems(fetched.data);
            } catch (error) {
                console.log(error);                
            };
        }  
        getItemsData();
    }, [items]);

    return(
        <>
            <div className='catalogueDesign'>
                <div className='catalogueTitle'>Otros trabajos</div>
                <div className='catalogueCenter'>
                    {items.map((item) => (
                        <div className='catalogueCard'>
                            <div className='catalogueImage'><img src={item.image} alt={item.title} /></div>
                            <div className='catalogueTitle'>{item.title}</div>
                            <div className='catalogueDescription'>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};