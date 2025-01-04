import React, { useEffect, useState } from 'react'
const d2="https://jsonplaceholder.typicode.com/albums";
function Datafile() {
   
    const[var3,setVar]=useState([]);

    const func1=async()=>{
        const response=await fetch(d2);
        const real=await response.json();
        setVar(real);
    }
    useEffect(()=>{
        console.log(func1());
    },[])
    console.log("I am the data in the Datafile "+var3);
  return (
    <div>
      {var3.map((item1)=>{
        return(<div style={{border:"3px solid Yellow"}}>
            <p>I am the data in the Datafile</p>
            <p>Id:{item1.id}</p>
            <p>Title:{item1.title}</p>
            <p>UserId:{item1.userId}</p>
        </div>)
      })}
    </div>
  )
}

export default Datafile
