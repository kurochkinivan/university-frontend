import React from "react";

function TextAreaWithLabel({ label }) {
    return (
        <>
            <div className="col-12">
                <label htmlFor="message" className="form-label">
                    {label}
                </label>

                <textarea
                    name="message"
                    rows="4"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    required=""
                ></textarea>
            </div>
        </>
    )
};

export default TextAreaWithLabel;