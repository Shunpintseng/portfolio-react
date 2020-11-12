import React from "react";
import "../style.css";


function Resume() {
    return (
        <div class="container-fluid">

        <h1>Resume</h1>

        <hr/>

        <article>
            <h2>Education</h2>
            <h5>University of Washington; Seattle, WA </h5>
            <h6> Professional and Continuing education
                Coding Bootcamp - Full Stack WebDevelopment</h6>

            <h5>Autodesk University; Las Vegas NV</h5>
            <h6>User Experience Design Course</h6>

            <h5>General Assembly; San Francisco CA</h5>
            <h6>Professional and Continuing education</h6>

            <h5>University of Oregon, Department of Architecture; Eugene OR</h5>
            <h6>Master of Interior Architecture</h6>

            <h5>Fu-Jen Catholic, Department of Applied Art;Taiwan</h5>
            <h6>Bachelor of Fine Art, concentration in Interior Design and Graphic Design</h6>

        </article>

        <hr/>

        <article>
            <h2>Work Experiences</h2>
            <h5>Gensler; Seattle, WA and San Francisco CA</h5>            
            <h5>Studio Design Performance Lead and Project BIM Lead</h5>
            <h6>February, 2007 - April, 2015; May, 2018-April, 2020</h6>
            <h6>Responsibilities</h6>
            <ul>
                <li>Workplace design user research and design strategy</li>
                <li>Concept and schematic design</li>
                <li>Development of User-specific template for Revit</li>
                <li>Streamlining of drawing production in Revit</li>
                <li>Construction documentation and Construction administration</li>
            </ul>

            <h5>NBBJ; Seattle, WA</h5>            
            <h5>Senior Designer, BIM Lead</h5>
            <h6>July, 2016 - April, 2018</h6>
            <h6>Responsibilities</h6>
            <ul>
                <li>Environmental graphic design</li>
                <li>Concept and schematic design</li>
                <li>Computational design</li>
                <li>Leading project design team</li>
            </ul>

            <h5>BOORA Architects; Portland OR</h5>            
            <h5>Intern/ Junior Designer</h5>
            <h6>June, 2005 - January, 2007</h6>
            <h6>Responsibilities</h6>
            <ul>
                <li>Updated and maintained material resource library</li>
                <li>Preliminary schematic design and space planning for institutional, government</li>
                <li>Prepared presentation materials</li>
                <li>Graphic design</li>
            </ul>
        </article>

        <hr/>

        <article>
            <h2>Software Skills</h2>
            <ul>
                <li>Software Languages: HTML, CSS, JavaScript, Node</li>
                <li>Architecture: Revit 2020(Revit certified Professional), AutoCAD, 3D Max Studio, Rhyno 3D</li>
                <li>Graphic Design: Illustrator, Photoshop, InDesign</li>
                <li>UX Prototype: Sketch, OmniGraffle, Axure, Flinto, Pop</li>
            </ul>
        </article>

        
        <hr/>

        <article>
            <h2>Awards and Scholarships</h2>
            <ul>
                <li>Interior Design Magazine, Best of Year 2015 Merit Award Winner, Visa, San Francisco</li>
                <li>Interior Design Magazine, Best of Year 2008 Merit Award Winner, Edelman, Seattle </li>
                <li>International Cultural Service Program, 2004-2005</li>
                <li>Lyman Johnson Interior Scholarship, 2005</li>
                <li>University of Oregon, AAA Dean's Scholarship, 2005</li>

            </ul>
        </article>

        <hr/>

        <article>
            <h2>Credentials</h2>
            <ul>
                <li>LEED BD+C (ID 10589202)</li>
                <li>NCIDQ (ID 26517)</li>
                <li>Revit Certified Professional (ID 188253)</li>

            </ul>
        </article>

    </div>
    );
  }


  export default Resume;