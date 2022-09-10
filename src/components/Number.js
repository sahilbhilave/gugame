import React from "react";
import $ from 'jquery';

setInterval(dis, 1000);

let start = sessionStorage.getItem("start");
        

let score = 0;
let rep = [];
let counter = 0;
rep = Myrand();
let kk=15;

function Myrand(){
    var ranNums = shuffle([0,1,2,3,4,5,6,7,8,9,10,11]);
    return ranNums;
}

function* shuffle(array) {

    var i = array.length;

    while (i--) {
        yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }

}

function dis()
{
    
    start = sessionStorage.getItem("start");
    if(parseInt(start) === 1 ){
        // score = parseInt(sessionStorage.getItem("score"));
        document.getElementById("time").innerText = kk+" sec";
        kk--;
    if(parseInt(counter)<12 && kk === -1)
    {
        kk=15;
    let t1 = sessionStorage.getItem("t1");
    
    sessionStorage.setItem("t1", 0);

    const sa = JSON.parse(sessionStorage.getItem("items"));
    let rand = rep.next().value;
    let num = sa[rand];
    counter= counter + 1;
    document.getElementById("result").innerText = "Number is "+num;

    if(parseInt(num)===parseInt(t1))
    {
        document.getElementById(t1).style.backgroundColor = "green";
        document.getElementById(t1).style.color = "white";
        score = score + 10;
        sessionStorage.setItem("score", score);
        document.getElementById("score").innerText = "Score : "+score;


        document.getElementById("")
        $('<span class="plus-one"/>', {
            style: 'display:none'
          })
          .html('+10')
          .appendTo($('.add-comment'))
          .fadeIn('1000', function() {
            var el = $(this);
            setTimeout(function() {
              el.remove();
            }, 2000);
          });
    }
    else
    {
        document.getElementById(num).style.backgroundColor = "red";
        document.getElementById(num).style.color = "white";
    }
}
else if(parseInt(counter)>11)
{
     sessionStorage.setItem("start", 0);
}
    }
    
}

export default function Number(){

    return(
        <div >
            <h1 id="result">Number</h1>
        </div>
    )
}
