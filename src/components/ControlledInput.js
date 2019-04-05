import React, { Component } from 'react';

class ControlledInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hal: true,
            fname: "plinko",
            lname: "jones"
        }
    }
    func(ev){
        ev.preventDefault()
        // console.log(ev)
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    render() {
        // let place1 = this.state.fname
        // let place2 = this.state.lname
        return (
            <form>
                <input type="type" id="fname" value={this.state.fname} onChange={(ev) => this.func(ev)}></input>
                <input type="text" id="lname" value={this.state.lname} onChange={(ev) => this.func(ev)}></input>
            </form>
        );
    }
}

export default ControlledInput;
