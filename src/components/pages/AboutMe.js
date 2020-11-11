import React from "react";
import "../style.css";
import HeadShot from '../images/HeadShot.jpg';

function AboutMe () {
    return (  
    <section className="container-fluid">

    <h1>About Me</h1>
    
    <hr/>

     <img id="headshot" src={HeadShot} alt="Facepic"/>

    <article>

        <p> I started my career as an interior architect and working on multiple large architecture firms in both Seattle and San Francisco. After 10 years in the architecture industry, I got involved in UX/UI design on a interior design project for a high tech client designing interactive way finding system. This experience got me interested in the UX design so I took a course in UX design.I built on this initial interest in a 4-month UX class at San Francisco General assembly. I was excited to better understand the significant overlap between UX design and architecture. The design thinking process is identical. During the UX courses, I often found myself coaching people in my class on design theory and graphic design and teaching them design software (e.g. Photoshop and Illustrator). There are three key strengths that I would bring to the team as a product designer:</p>

        <p> BIM technology: I have 10+ years of experience as project and office BIM lead. Revit is currently the software that dominates the design and construction industry. I became an Autodesk Certified Revit Professional in 2012 and have been managing the team’s BIM workflow. I am responsible for the collaboration with GC and MEP during the design and construction phases. I believe the understanding of Revit and BIM team workflow will provide important insights when it comes to developing new products for this industry. I think there are numerous opportunities to tap into the data that is built in BIM, and both MEP and GC can benefit greatly from it.</p>


        <p> Construction Administration: While I have a great passion for design, at the early stage of my career, I intentionally requested to be working on the technical side. Being a job captain/PA, I have gained a wealth of knowledge in construction. Working closely with GCs and engineers, I am exposed to a very different aspect of the design industry. CA is a very process-focused and time-consuming task. It continues to be a major pain point for many companies, and I have not seen a good solution to tackle
            this challenge. There are significant opportunities for improvement that PlanGrid can bring to the industry. I would be excited to bring to life ideas for improvement that could help both GCs and architects that I developed while encountering the daily challenges of my CA work.</p>

        <p>Cross discipline collaboration: Another aspect of my daily workflow is to collaborating with GC and MEP to create design solutions that are timely, have constructability and are budget friendly. It is always a struggle for designers to communicate design intentions and ideas over 2 dimensional drawings. I was able to utilize my skill in BIM to find effective ways to collaborate with GC and MEP. I thrive in a multi discipline environment with opportunities to learn quickly, tackle problems and come up with
            elegant solutions. Being a designer not only requires a good sense of aesthetics but also the ability to understand the psychology behind the design intention, which is particularly important when it comes to collaborating with MEP and GC. </p>

        </article>

</section>


    );
  }

  export default AboutMe;