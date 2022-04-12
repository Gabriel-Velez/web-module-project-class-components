import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      itemText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(e, this.state.itemText);
    this.setState({
      itemText: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='item'
          value={this.state.itemText}
          onChange={this.handleChanges}
          placeholder='Type todo'
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
