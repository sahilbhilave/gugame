import React , { useState }  from "react";
import Modal from 'react-bootstrap/Modal';

// setInterval(Choice, 5000);

sessionStorage.setItem("start", 0);
// let start = sessionStorage.getItem("start");

let start = 0;
// sessionStorage.setItem("start", 0);
// check();



function refresh()
{
    window.location.reload();
}

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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return(
<>
            <div id = "btn">

                <button onClick={handleShow} id = "btn3">How To Play?</button>
                <button onClick={check} id = "btn1">Start</button>
                <button onClick={check} id = "btn2" >Pause</button>
                <button onClick={refresh} id = "btn3" >Reset</button>

            </div>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Play??</Modal.Title>
        </Modal.Header>
        <Modal.Body>You must choose a number from the table that you believe will be called next in this guessing game in under <b>15 sec</b>. If the host's number matches yours, you will receive <b>10 points</b>.
        <br></br> <em>The table will always contain the number.</em>
<br></br><b>Red Color : Missed Number (0 points)<br></br>
Green Color : Correct Guess (10 points)</b>

</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
        </Modal>
</>
        )
    

}
