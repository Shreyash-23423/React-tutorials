import{ useState} from 'react'

export default function Counter(){

    let [count, setCount] = useState(0);

    let increment = ()=>{
        setCount(count + 1);
    }
    return(
        <>
        <h3>Count = {count} </h3>
        <button onClick={increment} > Increase count</button>
        </>
    )
}
