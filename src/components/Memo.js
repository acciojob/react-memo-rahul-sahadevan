import React,{useState,useEffect} from "react";

function Memo(){
    let [todo,setTodo] = useState([]);
    let [count,setCount] = useState(0);
    let [search,setSearch] = useState("");
    let [searchval,setSearchval] = useState([]);
    function handeTodo(){
        // console.log(todo)
        setTodo([...todo,"New Todo"])
    }
    function handleCount(){
        setCount(count+1)
    }
    function handleSearch(){
        setSearchval([...searchval,search]);
    }

    return (
        <div id="main">
            <h1>My Todo</h1>
            <p>New Todo</p>
            <button id="add-todo-btn" onClick={handeTodo}>Add Todo</button>
            <p>Count:{count} <button id="incr-ctn" onClick={handleCount}>+</button></p>
            <hr></hr>
            <input type="text" id="skill-input" onChange={(e) => setSearch(e.target.value)} ></input>
            <button onClick={handleSearch}>Add Skills</button>
            <ul>
                {
                   searchval.map((item) =>{
                    return (
                        <li>{item}</li>
                    )
                   })
                }
            </ul>
        </div>
    )
}
export default Memo;