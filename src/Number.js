import React from 'react';
import Child from './child';

const Number = (props) =>{
    return(
        <div>
         <button onClick={props.callFunctionInParent}>Click me</button>
          <div>{props.randNo}</div>
          <Child {...props} xyz="to Grand Child"/>
        </div>
        )
}    
   //    {...props} pass everything from parent to child
export default Number;   
  