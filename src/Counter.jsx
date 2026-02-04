import { useEffect, useState } from "react";
export default function Counter(){
    let [count,setcount]= useState(0);

    let inccount=()=>{
        setcount((currcount)=> currcount+1);
    };
    useEffect(function printsomething(){
        console.log("this is a side-effect")
    })
    return (
        <div>
            <h3>count ={count}</h3>
            <button onClick={inccount}>+1</button>
        </div>
    );
    }
