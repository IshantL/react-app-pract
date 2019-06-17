import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from './users/users';
import Parent from './Parent';
import Number from './Number';
import './App.css';
import ParentPure from './pureComponent/parent';
import PureComponent from './pureComponent/pureComponentMethod';

function Hello(props){
  return (<div>Hello {props.name}</div>)
}


class App extends Component {
  constructor(props){
    console.log("App Constructor");
    super(props);
    this.state={
      r:0,
      name: "friend"
    }
    this.clickeventButton=this.clickeventButton.bind(this);
  }
  clickeventButton(){
    console.log('ooooo');
    this.setState({r:Math.floor(Math.random()*10)})
      }
      componentWillMount(){
        console.log("App comonenet will mount");
        //if we want to change the state e.g depends on props etc before rendrening we can do it here.
        if(window.innerWidth <700){
          this.setState({innerWidth:window.innerWidth})
        }
      }
      componentDidMount(){
        console.log("App component did mount");
      }
      shouldComponentUpdate(nextState,nextProps){
        return true;
      }
      componentWillUpdate(){
        console.log("App component will update- app.js")
      }
      componentDidUpdate(prevProps,prevState){
        console.log("App component did Update-app.js")
      }
  render() {
    console.log("App render");
    return (
      <div className="App">
       <Parent/>
       <h1>{this.props.propString}</h1>
       <Number randNo={this.state.r} callFunctionInParent={this.clickeventButton}/>
       <Hello name={this.state.name}/>
       <Users title="Users List"/>
       Innerwidth: {this.state.innerWidth}
       <h1>Pure Component using should component update..</h1>
       <h1>Pure Component Method</h1>
       <PureComponent/>
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
