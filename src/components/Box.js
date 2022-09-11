//Random 12 size array is generated which contains values of 0 to 100 (without repetition)
  let d1 = []; 
  const genNum = Math.floor(Math.random() * 10);
  d1.push(genNum);
  console.time();
  for (let counter = 0; counter < 12; counter++) {
    let newGen = Math.floor(Math.random() * 100);
    while (d1.lastIndexOf(newGen) !== -1) {
      newGen = Math.floor(Math.random() * 100);
    }
    d1.push(newGen);
  }
  
//The random numbers are then set to session items
sessionStorage.setItem("items", JSON.stringify(d1));


//The random numbers generated are then stored in data
const data = [
  { a1: d1[0], a2: d1[1], a3: d1[2], a4: d1[3] },
  { a1: d1[4], a2: d1[5], a3: d1[6], a4: d1[7] },
  { a1: d1[8], a2: d1[9], a3: d1[10], a4: d1[11]},
]


function Box() {
  //The function value is called when a <td> is clicked from the table by the user
   const value = (event, x) => {
     var t1 = x;
    //Set the value of the <td> to user input t1 (session)
     sessionStorage.setItem("t1", t1);
   }

   //Below JSX is used to display the table with random numbers
  return (
    <>
    <div className="App">
      <table className="Box">
        
        {data.map((val, key) => {
          return (
            <tr key={key} >
              <td id={val.a1} onClick={event => value(event,val.a1)} tabindex="0">{val.a1}</td>
              <td id={val.a2} onClick={event => value(event,val.a2)} tabindex="0">{val.a2}</td>
              <td id={val.a3} onClick={event => value(event,val.a3)} tabindex="0">{val.a3}</td>
              <td id={val.a4} onClick={event => value(event,val.a4)} tabindex="0">{val.a4}</td>
            </tr>
          )
        })}
      </table>
    </div>
   
    </>
  );
}

export default Box;