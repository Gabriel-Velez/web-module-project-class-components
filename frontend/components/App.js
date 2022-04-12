import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const items = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
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

  render() {
    return (
      <div>
        <TodoList items={this.state.items} toggleItem={this.toggleItem} />
        <Form />
      </div>
    );
  }
}
