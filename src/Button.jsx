function printHello(){
    console.log("Hello World");
}
function printBye(){
    console.log("Bye World");
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>saiyonara</p>
        </div>
    );
}