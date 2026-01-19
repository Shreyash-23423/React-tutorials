function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Enter your name" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}