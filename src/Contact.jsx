import React from "react";
import { useState } from "react";

const Contact = () => {
    return (
        <div>
            <h2 className='contact'>Contact</h2>
            <p>Email:
                <a href="mailto:lindasherbert121@gmail.com" target='_blank' rel='noopener noreferrer'> lindasherbert121@gmail.com  </a>
            </p>
            <p>Github:
                <a href="https://github.com/sourylime" target='_blank' rel='noopener noreferrer'> github.com/sourylime  </a>
            </p>

        </div>
    );
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [validEmail, setValidEmail] = useState(true);

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            const isValidEmail = value.includes("@");
            setValidEmail(isValidEmail);
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (value.trim() === "") {
            setErrors({
                ...errors,
                [name]: true
            });
        } else {
            setErrors({
                ...errors,
                [name]: false
            });
        }
    }

    const saveFormData = () => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formData).every((value) => value.trim() !== "")) {
            alert("Form submitted!");

            saveFormData();
            console.log(formData);
        } else {
            console.error("Please fill in all fields");
        }
    }


    return (
        <div className="ContactForm">
            <h2>Reach out!</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={!validEmail ? "invalid" : ""} required />
                {!validEmail && <p className="error">Please enter a valid email address</p>}
                <label htmlFor="message">Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export { Contact, ContactForm };
