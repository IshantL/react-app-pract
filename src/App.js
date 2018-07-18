import React, { Component } from 'react';
import './App.css';
//import Header from './Header';
//import Intro from './Intro';
import PropTypes from 'prop-types';



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


class Parent extends Component{

   constructor(props){
    super(props);
    this.state={
      car:["c-bmw","c-porshe","c-Audi"]
    };
    this.handleClick=this.handleClick.bind(this);
  }
  

handleClick(){
this.setState({car:this.state.car.reverse()})
}

  render(){
    return(
<div>
<h1 onClick={this.handleClick}>Welcome to props</h1>
<Car model="BMW" no="123" cars={this.state.car}/>
</div>
    )
  }
}
Parent.defaultProps={
car:["bmw","porshe","Audi"]
}



class Car extends Component{
  render(){
    return(
<div>
<h2 >Welcome to Cars</h2>
<p>{this.props.model}</p>
<p>{this.props.no}</p>
<div>{this.props.cars.map((item,i)=>{
  return <p key={i}>{item}</p>;
})}</div>
</div>
    )
  }
}

class Number extends Component{
  render(){
    return(
      <div>
        {this.props.randNo}
      </div>
      )
  }
}
export default App;
