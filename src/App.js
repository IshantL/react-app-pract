import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from './users/users';
import Parent from './Parent';
import Number from './Number';
import './App.css';
import ParentPure from './pureComponent/parent';
import PureComponent from './pureComponent/pureComponentMethod';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';


function Hello(props){
  return (<div>Hello {props.name}</div>)
}

const User =(params)=>{
  return (<h1>Hello: {params.username}</h1>)
}

class App extends Component {
  constructor(props){
    console.log("App Constructor");
    super(props);
    this.state={
      r:0,
      name: "friend",
      loggedIn:false
    }
    this.clickeventButton=this.clickeventButton.bind(this);
  }
  loginHandle =()=>{
    console.log("Login Handle");

    this.setState(prevState=>({
      loggedIn:!prevState.loggedIn
      }));
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
    //exact is for match if we wnat strict match we have to use strict e.g /about/ then /about will not work...
    return (
      <Router>
      <div className="App">
      <h1>Router Demo..(/home,/about)</h1>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/Hello">Hello</Link></li>
        <li><Link to ="/User/John">User John</Link></li>
        <li><Link to ="/User/Peter">User Peter</Link></li>
      </ul>
      <h1>Using Nav Link</h1>
      <ul>
        <li><NavLink to ="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
        <li><NavLink to ="/about" exact activeStyle={{color:'green'}}>About</NavLink></li>
        <li><NavLink to ="/Hello" exact activeStyle={{color:'green'}}>Hello</NavLink></li>
        <li><NavLink to ="/User/John" exact activeStyle={{color:'green'}}>User John</NavLink></li>
        <li><NavLink to ="/User/Peter" exact activeStyle={{color:'green'}}>User Peter</NavLink></li>
      </ul>
      <Prompt 
      when={!this.state.loggedIn} 
      message="Are you sure?"
      />
      <Route path='/'exact render={()=>{
        return (<h1>Welcome Home</h1>)
      }}/>
      <Route path='/about'exact render={()=>{
        return (<h1>Welcome About</h1>)
      }}/>
      <Route path='/Hello' exact strict component={Hello}/>

      <Route path='/User/:username' exact strict render={({match})=>(
      this.state.loggedIn ? (<User username={match.params.username}/>):(<Redirect to ='/' />)
      )} />

      <input type="button" value={this.state.loggedIn ? 'Log out':'log in'} onClick={this.loginHandle}/>
       <Parent/>
       <h1>{this.props.propString}</h1>
       <Number randNo={this.state.r} callFunctionInParent={this.clickeventButton}/>
       <Hello name={this.state.name}/>
       <Users title="Users List"/>
       Innerwidth: {this.state.innerWidth}
       <h1>Pure Component using should component update..</h1>
       <ParentPure/>
       <h1>Pure Component Method</h1>
       <PureComponent/>
      </div>
      </Router>
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
