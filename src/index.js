import { sum } from "./calc";

import React from "react";
import ReactDom from "react-dom";

import "./index.css";

ReactDom.render(
    <div>
        <h2 className="blacktext">Mobile Operating System</h2>
       <ul>
           <li>Android</li>
           <li>Blackberry</li>
           <li>i-Phone</li>
           <li>Windows Phone</li>
       </ul>
       <h2>Mobile Manufacturers</h2>
       <ul>
           <li>Samsung</li>
           <li>HTC</li>
           <li>Micromax</li>
           <li>Apple</li>
       </ul>
    </div>,
    document.getElementById("root")
);
