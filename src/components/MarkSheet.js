import React, { } from 'react'

function MarkSheet() {
  
  
     let x=6;
     let y=5;
     let z =x+y;

    let score=10;

    let marks=100;

    let choco=5;
    choco*=42;

    let packet=4125;
    packet/=5;
    
  return (
    <div>

<button onClick={()=>
 {console.log(z) }}>Arithmatic operator
</button>

<div>
<button onClick={()=>{
  score++;
  console.log(score)
}}>increment</button>
</div>

<div>
  <button type="button" onClick={()=>{
    marks--;
    console.log(marks)
  }}>Decrement
  </button>
</div>
<div>
  <button type="button" onClick={()=>{
  console.log(choco)
  }}>Multiplication</button>
</div>
<div>
  <button type="button" onClick={()=>{
 console.log(packet)
  }}>
    Division
  </button></div>
  <hr></hr>
  <h3>Assignment operators</h3>
<div>
<button type="button" onClick={()=>{
  let a=5;
  a*=25;
  a/=5;
  a+=20;
  a-=6;
 
  console.log(a)
}}>assingnment</button>
</div>
<div>
  <button type="button"onClick={()=>{
    let mrp=425;

    console.log(mrp==320);
    console.log(mrp>=552);
    console.log(mrp<=551);
    console.log(mrp!=425);
    
  }}>Comparision operator</button>
</div>
<button type='button' onClick={()=>{
  let a=35;
  // let b=26;
  // let c=98;

  if (a>=35){console.log("pass")}
  else{console.log("fail")}
}}>operator</button>
</div>
  
  )
}

export default MarkSheet