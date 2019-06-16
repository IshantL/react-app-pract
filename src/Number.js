import React from 'react';

const Number = (props) =>{
    return(
        <div>
         <button onClick={props.callFunctionInParent}>Click me</button>
          <div>{props.randNo}</div>
        </div>
        )
}    
      
export default Number;   
  