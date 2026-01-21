export default function Counter(){

    let count = 0;

    function increment(){
        count+=1;
        console.log(count);
    }
    return(
        <>
        <h3>Count = {count} </h3>
        <button onClick={increment} > Increase count</button>
        </>
    )
}
