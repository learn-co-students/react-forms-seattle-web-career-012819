import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    luckyNumber: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <input type="number" name="luckyNumber" value={this.state.luckyNumber} onChange={this.handleChange} />
      </form>
    );
  }
}

export default ControlledInput;