import React,{useState} from "react";
import "./maintodo.css";
import Tasks from './Task';

function Maintodo() {
    function changetext(e){
        setItem(e.target.value);
        console.log(item)
    }
  
  function itemadd() {
    if (item === "") {
      alert("No Input");
      return;
    }
       setList([item,...list]);
       setItem("");
       document.getElementsByClassName("textBox")[0].value="";
  
  }
  function itemRemove(index){
      let tempList=list;
      tempList.splice(index, 1);
      setList([...tempList]);
  }
  let [list, setList] = useState([]);
  let [item,setItem] = useState("");
  return (

    <div className="TodoComponent">
      <div className="input">
        <input className="textBox" onChange={changetext}  />
        <button className="AddButton" onClick={itemadd}>Add</button>
      </div>
      <div className="task-container">
        <Tasks list={list} removeItem={itemRemove} />
        
      </div>
    </div>
  );
}

export default Maintodo;
