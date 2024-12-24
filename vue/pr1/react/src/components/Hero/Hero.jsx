import React from "react";

function Hero() {
    return (
        <>
            <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 mx-auto">
                            <em className="small-text">welcome to Barista.co</em>

                            <h1>Cafe Klang</h1>

                            <p className="text-white mb-4 pb-lg-2">
                                your <em>favourite</em> coffee daily lives.
                            </p>

                            <a className="btn custom-btn custom-border-btn smoothscroll me-3" href="#section_2">
                                Our Story
                            </a>

                            <a className="btn custom-btn smoothscroll me-2 mb-2" href="#section_3">
                                <strong>Check Menu</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;