import React from "react";
import ReviewCard from "./ReviewCard";

function Review({ testimonials }) {
    return (
        <>
            <section className="reviews-section section-padding section-bg" id="section_4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                            <em className="text-white">Reviews by Customers</em>
                            <h2 className="text-white">Testimonials</h2>
                        </div>

                        <div className="timeline">
                            {testimonials.map((testimonial, index) => (
                                <ReviewCard testimonial={testimonial} isRight={index % 2 === 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Review;