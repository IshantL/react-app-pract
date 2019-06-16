import React, {Component} from 'react';
import Car from './Car';

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
 export default Parent;