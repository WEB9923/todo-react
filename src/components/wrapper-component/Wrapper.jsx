import React, {useState} from "react";
import "./Wrapper.scss";
import Form from "../input-component/Form.jsx";
import List from "../list-component/List.jsx";
import {v4 as uuidv4} from "uuid";

export default function Wrapper() {
    const [todos,setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false}])
        console.log(todos)
    }
    const handlecomplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo,completed: !todo.completed} : todo))
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="todo">
                    <div className="inputContainer">
                        <Form addTodo={addTodo}/>
                    </div>
                    <div className="listContainer">
                        {
                            todos.map((todo) => (
                                <List
                                    todoTask={todo}
                                    key={uuidv4()}
                                    handleComplete={handlecomplete}
                                    deleteTodo={deleteTodo}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
