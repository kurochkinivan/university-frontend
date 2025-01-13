import React from "react";
import InputTextField from "./InputTextField";
import TextAreaWithLabel from "./TextAreaWithLabel";

function Contact() {
    return (
        <>
            <section className="contact-section section-padding" id="section_5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <em className="text-white">Say Hello</em>
                            <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
                        </div>

                        <div className="col-lg-6 col-12">
                            <form action="#" method="post" className="custom-form contact-form" role="form">
                                <div className="row">
                                    <InputTextField
                                        label="Name"
                                        id="name"
                                        name="name"
                                        placeholder="Jackson"
                                        required
                                    />

                                    <InputTextField
                                        label="Email Address"
                                        id="email"
                                        name="email"
                                        placeholder="Jack@gmail.com"
                                        type="email"
                                        required
                                    />

                                    <TextAreaWithLabel label="How can we help?" />
                                </div>

                                <div className="col-lg-5 col-12 mx-auto mt-3">
                                    <button type="submit" className="form-control">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
                            <iframe
                                className="google-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
                                width="100%"
                                height="300"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;