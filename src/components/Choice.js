import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';

//Start is the signal to when the game will start (if 1 then start, if 0 then don't start)
let start = 0;

//Refresh function is called when the user presses the Reset Button
function refresh() {
    window.location.reload();
}

//Check function is called after Start/Stop button is pressed
function check() {

    //If the start is set to 1 then execute the below code
    if (parseInt(start) === parseInt(1)) {
        //the start is set to 0 which will pause the game
        sessionStorage.setItem("start", 0);
        start = sessionStorage.getItem("start");

        //The Start button is enabled
        document.getElementById('btn1').disabled = false;
        //The Pause button is disabled
        document.getElementById('btn2').disabled = true;
    }
    //If the start is set to 0 then execute the below code
    else {
        //The start is set to 1 which will start the game
        sessionStorage.setItem("start", 1);
        start = sessionStorage.getItem("start");
        //The Start button is disabled
        document.getElementById('btn1').disabled = true;
        //The Pause button is enabled
        document.getElementById('btn2').disabled = false;

    }
}


export default function Choice() {
    //The code is used to display the Modal when the user presses 'How To Play?'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id="btn">

                <button onClick={handleShow} id="btn3">How To Play?</button>
                <button onClick={check} id="btn1">Start</button>
                <button onClick={check} id="btn2" >Pause</button>
                <button onClick={refresh} id="btn3" >Reset</button>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>How To Play??</Modal.Title>
                </Modal.Header>
                <Modal.Body>You must choose a number from the table that you believe will be called next in this guessing game in under <b>15 sec</b>. If the host's number matches yours, you will receive <b>10 points</b>.
                    <br></br> <em>The table will always contain the number.</em> [Click inside the table to select a number]
                    <br></br><b>Red Color : Missed Number (0 points)<br></br>
                        Green Color : Correct Guess (10 points)
                        <br></br>Black Color : Your Number
                        </b>
                        <br></br>Press Start to begin the timer and Pause to stop the timer. <br></br>Reset Button will reset the timer and change table values.
                        <br></br>Once the timer runs out after 12 chances and the table is filled the game will be over!

                </Modal.Body>
                <Modal.Footer>
                    <button  onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    )


}
