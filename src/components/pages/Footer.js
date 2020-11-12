import React from 'react'
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png"

export default function Footer() {
    return (
       <div>
    <footer>

<Link href="http://www.linkedin.com/in/shun-pin-tseng" target="_blank"> <img id="logo" src={linkedin}
        alt="logo" /></Link>

</footer>

</div>
    )
}

