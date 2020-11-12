import React, { Component } from "react";
import { Link } from "react-router-dom";
import Projects from "../../projects.json";
import "../style.css"
import ProjectCard from "./ProjectCard";



export default class Portfolio extends Component {
    state = {
        Projects: Projects
    };
    render() {
        return (
            
    <section className="container-fluid">

    <h1>Portfolio</h1>
    <h6>Here are some of my web development projects!</h6>
    <hr/>
    {this.state.Projects.map(Project => (
          <ProjectCard
       
            id={Project.id}
            key={Project.id}
            name={Project.name}
            image={Project.image}
            Link={Project.Link}
            GitHub={Project.GitHub}
          />
        ))}


</section>
        )
    }
}

