import { getItems } from "../../services/apiCalls";
import "./Catalogue.css";
import { useEffect, useState } from "react";
import { CustomCard } from "../../components/common/CustomCard/CustomCard";


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

    return (
        <>
            <div className='catalogueDesign'>
                <div className='catalogueTitle'>Otros trabajos</div>
                <div className='catalogueCenter'>
                    {
                    items.map ((item, index) => (
                        <CustomCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
};