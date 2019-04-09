import React, { Component } from 'react'

class ControlledForm extends Component{
  state = {
    bobValue: '',
    snobValue: ''
  }

  handleChange = event => {
    event.preventDefault() //unneccesary because value is state but helps me rest easy
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderInputs(){
    return Object.keys(this.state).map(field => {
      return (<input
                type="text"
                name={field}
                value={this.state[field]}
                onChange={this.handleChange}/>)
    })
  }

  render(){
    return <form>
      {this.renderInputs()}
      <div>{`${this.state.bobValue} ${this.state.snobValue}`}</div>
    </form>
  }

}

export default ControlledForm
