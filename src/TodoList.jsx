import { useState } from 'react';

export default function TodoList() {
   
    let [todos,setTodos] = useState(["sample task 1"]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {    
    console.log("Add Task button clicked");
    setTodos([...todos, newTodo]);
    setNewTodo("");
   };

   let upadteTodoValue = (event) => {
    setNewTodo(event.target.value);
   }
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input type="text"
                 placeholder="Enter your task"
            
                 onChange={upadteTodoValue} />
                 <br />
                <button onClick={addNewTask}>Add Task</button>
                <br /><br /><br /><br /><br />
                <hr />
                <h4>Your Tasks:</h4>
                <ul>
                    {todos.map((todo) => (
                        <li>{todo }</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}