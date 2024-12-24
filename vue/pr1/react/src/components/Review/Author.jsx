import React from "react";

function Author({ author }) {
    return (
        <>
            <div className="reviews-block-image-wrap d-flex align-items-center">
                <img
                    src={author.avatar}
                    className="reviews-block-image img-fluid"
                    alt=""
                />

                <div>
                    <h6 className="text-white mb-0">{author.name}</h6>
                    <em className="text-white">{author.who}</em>
                </div>
            </div>
        </>
    )
};

export default Author;