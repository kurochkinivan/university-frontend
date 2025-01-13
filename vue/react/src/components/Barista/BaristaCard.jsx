import React from "react";

function BaristaCard({ person }) {
    return (
        <>
            <div key={person.name + person.tag} className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                    <div className="team-block-info d-flex flex-column">
                        <div className="d-flex mt-auto mb-3">
                            <h4 className="text-white mb-0">{person.name}</h4>

                            <p className="badge ms-4">
                                <em>{person.tag}</em>
                            </p>
                        </div>

                        <p className="text-white mb-0">{person.tagline}</p>
                    </div>

                    <div className="team-block-image-wrap">
                        <img src={person.image} className="team-block-image img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaristaCard;