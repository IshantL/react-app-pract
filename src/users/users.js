import React, {Component} from 'react';
import User from './user';

class Users extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                Hello from class componenet
                <User age="27">Ishant</User>
                <User age="26">Jinks</User>
                <User >Pranava</User>
            </div>
        )
    }
}
export default Users;