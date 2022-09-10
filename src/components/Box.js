
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
  

  // let d2 = []; 
  // const genNum2 = Math.floor(Math.random() * 10);
  // d2.push(genNum2);
  // console.time();
  // for (let counter = 0; counter < 12; counter++) {
  //   let newGen2 = Math.floor(Math.random() * 100);
  //   while (d1.lastIndexOf(newGen2) !== -1) {
  //     newGen2 = Math.floor(Math.random() * 100);
  //   }
  //   d2.push(newGen2);
  // }




// d1[0] = Math.ceil(Math.random()*100);
// d1[1] = Math.ceil(Math.random()*100);
// d1[2] = Math.ceil(Math.random()*100);
// d1[3] = Math.ceil(Math.random()*100);
// d1[4] = Math.ceil(Math.random()*100);
// d1[5] = Math.ceil(Math.random()*100);
// d1[6] = Math.ceil(Math.random()*100);
// d1[7] = Math.ceil(Math.random()*100);
// d1[8] = Math.ceil(Math.random()*100);
// d1[9] = Math.ceil(Math.random()*100);
// d1[10] = Math.ceil(Math.random()*100);
// d1[11] = Math.ceil(Math.random()*100);
// d1[12] = Math.ceil(Math.random()*100);

// Session
sessionStorage.setItem("items", JSON.stringify(d1));

const data = [
  { a1: d1[0], a2: d1[1], a3: d1[2], a4: d1[3] },
  { a1: d1[4], a2: d1[5], a3: d1[6], a4: d1[7] },
  { a1: d1[8], a2: d1[9], a3: d1[10], a4: d1[11]},
]

// const a_data = [
//   { b1: d2[0], b2: d2[1], b3: d2[2], b4: d2[3] },
//   { b1: d2[4], b2: d2[5], b3: d2[6], b4: d2[7] },
//   { b1: d2[8], b2: d2[9], b3: d2[10], b4: d2[11]},
// ]


function Box() {
   const value = (event, x) => {
     
     var t1 = x;
    //  Session stored t1 for t1
     sessionStorage.setItem("t1", t1);

   }
  return (
    <>
    <div className="App">
      <table className="Box">
        
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td id={val.a1} onClick={event => value(event,val.a1)}>{val.a1}</td>
              <td id={val.a2} onClick={event => value(event,val.a2)}>{val.a2}</td>
              <td id={val.a3} onClick={event => value(event,val.a3)}>{val.a3}</td>
              <td id={val.a4} onClick={event => value(event,val.a4)}>{val.a4}</td>
            </tr>
          )
        })}
      </table>

      {/* <table className="Box">
        
        {a_data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.b1}</td>
              <td>{val.b2}</td>
              <td>{val.b3}</td>
              <td>{val.b4}</td>
            </tr>
          )
        })}
      </table> */}
      
    </div>
   
    </>
  );
}

export default Box;