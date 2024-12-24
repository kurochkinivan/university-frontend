import React from "react";

function DishCard({ item }) {
    return (
        <>
            <div key={item.name} className="menu-block my-4">
                <div className="d-flex">
                    <h6>
                        {item.name}
                        {item.isRecommended && <span className="badge ms-3">Recommend</span>}
                    </h6>

                    <span className="underline"></span>
                    <div className="ms-auto">
                        {item.oldPrice && (
                            <strong className="text-white ">
                                <del>{item.oldPrice}</del>
                            </strong>
                        )}

                        <strong className="ms-2">{item.price}</strong>
                    </div>
                </div>

                <div className="border-top mt-2 pt-2">
                    <small>{item.descr}</small>
                </div>
            </div>
        </>
    )
};

export default DishCard;
