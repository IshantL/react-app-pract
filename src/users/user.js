import React from 'react';

const User =(props)=>{
    if(!props.age ){
        return <h4>Name:{props.children}</h4>

    }else{
        return <h4>Age: {props.age} Name:{props.children}</h4>

    }
}
export default User;