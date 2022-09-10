import React from "react";
// setInterval(Choice, 5000);

sessionStorage.setItem("start", 0);
// let start = sessionStorage.getItem("start");

let start = 0;
// sessionStorage.setItem("start", 0);
// check();
function check()
{
    // start = sessionStorage.getItem("start");
    
    if(parseInt(start) === parseInt(1)){
        sessionStorage.setItem("start", 0);
        start = sessionStorage.getItem("start");
        
        document.getElementById('btn1').disabled = false;
        document.getElementById('btn2').disabled = true;
    }
    else{
        sessionStorage.setItem("start", 1);
        start = sessionStorage.getItem("start");
       
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = false;

    }
}


export default function Choice(){
        return(

            <div id = "btn">
                <button onClick={check} id = "btn1">Start</button>
                <button onClick={check} id = "btn2" >Pause</button>

            </div>
        )
    

}
