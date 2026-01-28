import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
   
    let [todos,setTodos] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask = () => {    
    console.log("Add Task button clicked");
    setTodos((prevTodos) => {
        return [...prevTodos, {task: newTodo, id: uuidv4()}];
    });
    setNewTodo("");
   };

   let upadteTodoValue = (event) => {
    setNewTodo(event.target.value);
   }
   let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id));
   }

    let uppercaseall = () => {
       setTodos((prevTodos) =>
        prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
       );
    }

    let uppercaseone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                }
                return todo;
            })
        );
    }

    return (
        <div> 
            <h1>Todo List</h1>
            <div>
                <input type="text"
                 placeholder="Enter your task"
                    value={newTodo}
                 onChange={upadteTodoValue} />
                 <br />
                <button onClick={addNewTask}>Add Task</button>
                <br /><br /><br /><br /><br />
                <hr />
                <h4>Your Tasks:</h4>
                <ul>            
                    {todos.map((todo) => (
                        <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => uppercaseone(todo.id)}>Uppercase</button>
                        </li>
                    ))}
                </ul>
                <br />
                <button onClick={uppercaseall}>Uppercase all</button>
            </div>
        </div>
    );
}