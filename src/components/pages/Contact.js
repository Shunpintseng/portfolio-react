import React from "react";
import "../style.css";




function Contact() {
    return (
   
<div className="container-fluid">

    <h1>Contact</h1>
    
    <br/>
 
    <form>

      <div className="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
        <br/>
      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <br/>
      <div calssName="messagebox">
        <label for="exampleInputEmail">Message</label>
        <input type="text" class="textarea"/>
      </div>
      <br/>
      <button type="submit" class="btn">Submit</button>

    </form>

  
</div>
    );
  }


 export default Contact
