import React from "react";

const generateStarsClass = (rating) => {
    const starsClass = [];
    const fullStars = Math.floor(rating); // Количество полных звезд
    const hasHalfStar = rating % 1 >= 0.5; // Нужна ли половина звезды

    for (let i = 0; i < fullStars; i++) {
        starsClass.push('bi-star-fill');
    }

    if (hasHalfStar) {
        starsClass.push('bi-star-half');
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsClass.push('bi-star');
    }

    return starsClass;
};

function Rating({ rating }) {
    return (
        <>
            <div className="d-flex border-top pt-3 mt-4">
                <strong className="text-white">
                    {rating} <small className="ms-2">Rating</small>
                </strong>

                <div className="reviews-group ms-auto">
                    {generateStarsClass(rating).map((startClass, index) => (
                        <i key={index} className={startClass}></i>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Rating;