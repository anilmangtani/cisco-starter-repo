import React from "react";
import ChildComp from "./ChildComp";
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