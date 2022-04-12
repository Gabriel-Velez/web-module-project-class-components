import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const items = [
  {
    name: "Walk the dog",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Learn React",
    id: 1528817084358,
    completed: false,
  },
  {
    name: "Have fun",
    id: 1528817484358,
    completed: false,
  },
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items,
    };
  }

  addItem = (e, item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  toggleItem = (itemID) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (itemID === item.id)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      }),
    });
    console.log(this.state);
  };

  hideCompleted = () => {
    document
      .querySelectorAll(".todo.completed")
      .forEach((element) => element.classList.add("gone"));
    document.querySelector("#hideButton").classList.add("gone");
    document.querySelector("#showButton").classList.remove("gone");
  };

  showCompleted = () => {
    document.querySelectorAll(".todo.gone").forEach((element) => element.classList.remove("gone"));
    document.querySelector("#hideButton").classList.remove("gone");
    document.querySelector("#showButton").classList.add("gone");
  };

  render() {
    return (
      <div>
        <TodoList items={this.state.items} toggleItem={this.toggleItem} />
        <Form addItem={this.addItem} />
        <button id='hideButton' onClick={this.hideCompleted}>
          Hide Completed
        </button>
        <button id='showButton' className='gone' onClick={this.showCompleted}>
          Show Completed
        </button>
      </div>
    );
  }
}
