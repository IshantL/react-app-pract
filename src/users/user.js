import React from 'react';

const User =(props)=>{
    if(!props.age ){
        return <h2>Not specified</h2>

    }else{
        return <h2>Age: {props.age} Name:{props.children}</h2>

    }
}
export default User;