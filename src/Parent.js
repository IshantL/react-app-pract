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
   componentWillReceiveProps(){
    console.log("component will recieve props in child parent");
}
 
 handleClick(){
 this.setState({car:this.state.car.reverse()})
 }
 shouldComponentUpdate(nextState,nextProps){
  console.log("should component update -parent")
  return true;
}
componentWillUpdate(){
  console.log("component will update- parent.js")
}
componentDidUpdate(prevProps,prevState){
  console.log("component did Update-parent.js")
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