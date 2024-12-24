import React from "react";
import Rating from "./Rating";
import Author from "./Author";

function ReviewCard({ testimonial, isRight }) {
    return (
        <>
            <div
                key={testimonial.author.name}
                className={isRight ? 'timeline-container timeline-container-right' : 'timeline-container'}>
                <div className="timeline-content">
                    <div className="reviews-block">
                        <Author author={testimonial.author} />

                        <div className="reviews-block-info">
                            <p>{testimonial.descr}</p>

                            <Rating rating={testimonial.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ReviewCard;
