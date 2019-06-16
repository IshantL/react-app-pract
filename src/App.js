import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from './users/users';
import Parent from './Parent';
import Number from './Number';
import './App.css';

function Hello(){
  return "Hello Dear";
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      r:0
    }
    this.clickeventButton=this.clickeventButton.bind(this);
  }
  clickeventButton(){
    console.log('ooooo');
    this.setState({r:Math.floor(Math.random()*10)})
      }
      
  render() {
    return (
      <div className="App">
       <Parent/>
       <h1>{this.props.propString}</h1>
       <button onClick={this.clickeventButton}>Click me</button>
       <Number randNo={this.state.r}/>
       <Hello/>
       <Users title="Users List"/>
      </div>
    );
  }
}


App.propTypes={
  propString:PropTypes.string,
  propObject:PropTypes.object,
  propNumber:PropTypes.number
}

App.defaultProps={
  propString:"Ishant",
  propNumber:786,
  propObject:{
    "id":1,
    "name":"Ilikeit"
  }
}
export default App;
