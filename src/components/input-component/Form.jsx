import React, {useState} from "react";
import "./Form.scss";
import {FaPlusSquare} from "react-icons/fa";

export default function Form({addTodo}) {
    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.value === "" || e.target.value === null || e.target.value === undefined) {
            alert("please fill input.")
            return false;
        } else {
            addTodo(value);
        }
        setValue("");
        e.target.focus();
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"enter new todo text..."}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type={"submit"}>
                    <FaPlusSquare size={26}/>
                </button>
            </form>
        </React.Fragment>
    )
}
