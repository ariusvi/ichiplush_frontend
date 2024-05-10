import { CustomCard } from "../../components/common/CustomCard/CustomCard";
import { getReviews } from "../../services/apiCalls";
import "./Reviews.css";
import ReactStars from "react-rating-stars-component";

import React, { useState, useEffect } from 'react';

export const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviewsData = async () => {
            try {
                const fetched = await getReviews();
                setReviews(fetched.data);
            } catch (error) {
                console.log(error);
            };
        }
        getReviewsData();
    }, []);

    return(
        <>
            <div className='reviewsDesign'>
                <div className='reviewsTitle'>Opiniones</div>
                <div className='reviewsCenter'>
                    {
                    reviews.map ((review, index) => (
                        <div key={index}>
                            <CustomCard
                                description={review.text}
                            />
                            <ReactStars
                                count={5}
                                value={review.rating}
                                size={24}
                                activeColor="#ffd700"
                                isHalf={true}
                                edit={false}
                            />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}