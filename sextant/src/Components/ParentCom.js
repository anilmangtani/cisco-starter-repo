import React from "react";
import ChildComp from "./ChildComp";
import Client from "./Client";
import IPComp from "./IP";

const ParentComp = () =>{
    return(
        <div>
            <ChildComp/>
            <IPComp/>
            
        </div>
    );
}

export default ParentComp;