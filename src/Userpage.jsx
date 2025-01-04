import React, { useEffect } from 'react'
import { useState } from 'react';
const d="https://jsonplaceholder.typicode.com/posts";


function Userpage() {

  const[var1,setVar]=useState([]);

    const func=async()=>{
        const response=await fetch(d);
        const v=await response.json();
        setVar(v);
     }

     useEffect(()=>{
        console.log(func());
     },[]);
   
  return (
    <div>
   {var1.map((item)=>{
    return(
        <div style={{border:"2px solid green"}}>
            <p>UserId:{item.userId}</p>
            <p>Id:{item.id}</p>
            <p>Title:{item.title}</p>
        </div>
    )
   })}
    </div>
  )
}

export default Userpage
