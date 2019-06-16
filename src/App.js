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
    console.log("Constructor");
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
      componentWillMount(){
        console.log("comonenet will mount");
        //if we want to change the state e.g depends on props etc before rendrening we can do it here.
        if(window.innerWidth <700){
          this.setState({innerWidth:window.innerWidth})
        }
      }
      componentDidMount(){
        console.log("component did mount");
      }
      shouldComponentUpdate(nextState,nextProps){
        console.log("should component update -App.js")
        return true;
      }
      componentWillUpdate(){
        console.log("component will update- app.js")
      }
      componentDidUpdate(prevProps,prevState){
        console.log("component did Update-app.js")
      }
  render() {
    console.log("render");
    return (
      <div className="App">
       <Parent/>
       <h1>{this.props.propString}</h1>
      
       <Number randNo={this.state.r} callFunctionInParent={this.clickeventButton}/>
       <Hello/>
       <Users title="Users List"/>
       Innerwidth: {this.state.innerWidth}
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
