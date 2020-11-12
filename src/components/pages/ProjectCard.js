import React from 'react';
import "../style.css";

export default function ProjectCard (props) {
    return (

    <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
                <a href={props.Link}><img src={props.image} alt= {props.name} /></a>
        </div>
        
        <div className="overlay">
                    <a href={props.GitHub}><img src="/images/GitHubIcon.png" alt={props.name}  /></a>
        </div>
    </div>

        
    )
}

