https://github.com/nytimes/react-tracking/blob/master/README.md



import React from 'react';
import './App.css';
import UserMetrics from './UserMetrics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      User Metrics Component
       <UserMetrics/>
      </header>
    </div>
  );
}

export default App;


import React,{Component} from 'react';
import data from './data/data';
class UserMetrics extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: data
        }
    }

    userData = () =>{
        console.log("in user data");
        console.log(this.state.data);
         
    }
    render(){
        console.log("in render");
        this.userData();
        return this.state.data.map((temp)=>{
            return (
                <div>
                <p>{temp.id}</p>
                <p>{temp.title}</p>
                <p>{temp.body}</p>
                </div>
            );
        })
        
    }
}

export default UserMetrics;

import React,{Component} from 'react';
import data from './data/data';
class UserMetrics extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: data
        }
    }

    userData = () =>{
        console.log("in user data");
        console.log(this.state.data);
         
    }
    render(){
        console.log("in render");
        this.userData();
        return this.state.data.map((temp)=>{
            return (
                <div>
                <p>{temp.id}</p>
                <p>{temp.title}</p>
                <p>{temp.body}</p>
                </div>
            );
        })
        
    }
}

export default UserMetrics;
