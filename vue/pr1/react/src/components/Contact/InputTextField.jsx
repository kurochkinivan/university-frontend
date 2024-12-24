import React from "react";

function InputTextField({ label, type = "text", name, id, placeholder, required }) {
    return (
        <>
            <div className="col-lg-6 col-12">
                <label htmlFor={id} className="form-label">
                    {label} {required && <sup className="text-danger">*</sup>}
                </label>

                <input
                    type={type}
                    name={name}
                    id={id}
                    className="form-control"
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </>
    )
}

export default InputTextField;