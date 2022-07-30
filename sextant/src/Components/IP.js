import React,{useState, useEffect} from "react";

const IPComp = () =>{

    let [details, setdetails] = useState(null);

    async function getIP(){
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data;
    }    
    
    useEffect(() => {
        getIP()
        .then(data => setdetails(data.ip));
    });

    return(
        <div>
            <h1>IP Address</h1>
            <>{details}</>
        </div>
    );
}

export default IPComp;