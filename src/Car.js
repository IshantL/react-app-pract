import React, {Component} from 'react';

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
  export default Car;