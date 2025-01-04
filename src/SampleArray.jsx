import { useState } from "react";
import { userdata } from "./data";

function SampleArray() {

  let myname="Deepika Usike"

    const[count,setCount]=useState(0);
    const Increment=()=>{
        setCount(count+1);
    }
    const Decrement=()=>{
       if(count>0){
        setCount(count-1);
       }
    }
    const reset=()=>{
        setCount(0);
    }
  const[firstdata,setFirstdata]=useState("")
  const getFirstdata=(event)=>{
     setFirstdata(event.target.value);
  }
  const [finalData,setFinalData]=useState("")
  const getFinalData=(event)=>{
    event.preventDefault();
   setFinalData(firstdata);
  }

return (
        <div>
           
        <form onSubmit={getFinalData}>
            <input type="text" onChange={getFirstdata} placeholder="Enter your name"/>
            <button className="btn" onClick={getFinalData}>Submit</button>

            <p>{finalData}</p>
        </form>
      


        <p><button onClick={Increment}>Increment</button></p>
        <p><button onClick={Decrement}>Decrement</button></p>
        <p><button onClick={reset}>Reset</button></p>
        <h1>{count}</h1>
    <h2>This is the data from array which consists of nested objects </h2>
    {userdata.map((user)=>{
        return(<div style={{border:"4px solid blue"}}>
           <p> name:{user.username}</p>
           <p> email:{user.email}</p>
           <p> adress:{user.address.street},{user.address.city}</p>
        </div>)
    })}

    <h3>I am Using Template Literal Example in this area</h3>
    <p>{`My name is ${myname}`}</p>
        </div>
    );
}

export default SampleArray;
