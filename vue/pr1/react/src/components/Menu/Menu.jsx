import React from "react";
import MenuCard from "./MenuCard";

function Menu({ menus }) {
    return (
        <>
            <section className="menu-section section-padding" id="section_3">
                <div className="container">
                    <div className="row">
                        {/* mb-4 mb-lg-0 */}

                        {menus.map((menu) => (
                            <MenuCard menu={menu} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu;