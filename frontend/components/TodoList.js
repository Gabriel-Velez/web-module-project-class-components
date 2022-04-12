import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      <h2>Todos:</h2>
      {props.items.map((item) => {
        return (
          <Todo
            name={item.name}
            key={item.id}
            id={item.id}
            completed={item.completed}
            toggleItem={props.toggleItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
