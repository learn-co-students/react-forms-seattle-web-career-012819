import React, { Component } from 'react'

class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  // Handle all changes on form.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Handle form submission.
  handleSubmit = (event) => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  // Send form data, dummy method.
  sendFormDataSomewhere = (data) => {
    console.log('Dummy POST / PUT / PATCH for data:')
    console.log(data)
  }

  // Render the form.
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    )
  }
}

export default ControlledInput
