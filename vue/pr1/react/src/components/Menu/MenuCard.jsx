import React from "react";
import DishCard from "./DishCard";

function MenuCard({ menu }) {
    return (
        <>
            <div key={menu.name + menu.type} className="col-lg-6 col-12 ">
                <div className="menu-block-wrap">
                    <div className="text-center mb-4 pb-lg-2">
                        <em className="text-white">{menu.name}</em>
                        <h4 className="text-white">{menu.type}</h4>
                    </div>
                    {menu.items.map((item) => (
                        <DishCard item={item} />
                    ))};
                </div>
            </div>
        </>
    )
};

export default MenuCard;