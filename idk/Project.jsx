import React from "react";


const Project = ({ title, description, image }) => {
    return (

        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt={title} />


        </div>

    );
}

export default Project;