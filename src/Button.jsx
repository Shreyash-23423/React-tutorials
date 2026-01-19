function handleClick(){
    console.log("Hello World");
}
function handleMouseOver(){
    console.log("Bye World");
}
function handledoubleClick(event){
    console.log("Double Clicked");
    console.log(event);
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quas id illum rem assumenda non, ratione consequatur eligendi ipsum repellendus pariatur voluptatibus commodi ipsa enim laudantium deleniti esse ab explicabo.</p>
            <button onDoubleClick={handledoubleClick}>Double Click me!</button>
        </div>
    );
}