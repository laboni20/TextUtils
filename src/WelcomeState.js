import React, { Component } from 'react'

export class WelcomeState extends Component {
    constructor(){
    super();
    this.state={
        message : 'Hi this is Laboni',
    };
    }
    changeMessage(){
        this.setState ({
            message : 'Changed Message',
        });
    }
  render() {
    return (
      <div>
       <h1> First Message : {this.state.message}</h1>
      <button onClick={()=>{this.changeMessage();}}>Change the default message</button>
      </div>
    )
  }
}

export default WelcomeState