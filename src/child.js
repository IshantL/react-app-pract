import React,{Fragment} from 'react';

const Child = (props) =>{
    return(
        <Fragment>
          <div>{props.xyz}</div>
          <div>{props.randNo}</div>
        </Fragment>
        )
}    
      
export default Child;   
  