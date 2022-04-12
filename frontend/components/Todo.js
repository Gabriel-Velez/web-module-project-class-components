import React from "react";

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleItem(props.id)}
      className={`todo ${props.completed ? "completed" : ""}`}>
      <p>{props.name}</p>
    </div>
  );
};

export default Todo;
