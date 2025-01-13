import React from "react";
import BaristaCard from "./BaristaCard";

function Barista({ peoples }) {
    return (
        <>
            <section className="barista-section section-padding section-bg" id="barista-team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                            <em className="text-white">Creative Baristas</em>

                            <h2 className="text-white">Meet People</h2>
                        </div>
                        {peoples.map((person) => (
                            <BaristaCard person={person} />
                        ))};
                    </div>
                </div>
            </section>
        </>
    )
}

export default Barista;
