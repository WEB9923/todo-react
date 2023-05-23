import React from "react";
import "./List.scss";
import { FaPenAlt, FaTrash} from "react-icons/fa";

export default function List({todoTask,handleComplete,deleteTodo}) {
    return (
        <React.Fragment>
            <div className="list">
                <p
                    className={`${todoTask.completed ? "completed" : ""}`}
                    onClick={() => handleComplete(todoTask.id)}
                >
                    {todoTask.task}
                </p>
                <div className="">
                    <FaPenAlt size={24}/>
                    <FaTrash
                        size={24}
                        onClick={() => deleteTodo(todoTask.id)}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}
