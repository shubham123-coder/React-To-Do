import React from "react";
import "./Task.css";

function Task(props) {
    function DeleteItem(e){
        let del=e.target.parentNode.id;
        console.log(del);
        props.removeItem(del);
    }
  return (
     <div>
      {props.list.map((val, index)=> {
        return (
          <div className="item" key={index}>
            {val}
            <p className="close-button" onClick={DeleteItem}>close</p>
            
                
            </div>
        );
       
       })}

    </div>
  );
        }

export default Task;
