import { useEffect, useState } from "react";
export default function Joker (){
    let [joke,setjoke]=useState({});

const URL ="https://official-joke-api.appspot.com/random_joke"

const getnewJoke =async()=>{
    let response = await fetch(URL);
    let jsonresponse=await response.json();
    console.log(jsonresponse)
    setjoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
};
 useEffect(()=>{
        async function getfirstJoke() {
             let response = await fetch(URL);
             let jsonresponse=await response.json();
             console.log(jsonresponse)
             setjoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})  
               
        }
        getfirstJoke();
    },[])
return (
    <div>
        <h3>Joker</h3>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getnewJoke}>New joke</button>
    </div>
)
}