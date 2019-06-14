import React, {Component} from 'react';
import User from './user';

class Users extends Component{
    constructor(props){
        super(props);

        this.state ={
            users:[
                {name:"ishant", age:27},
                {name:"jinks", age: 26},
                {name:"pranava", age:26}
              ]
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                Hello from class componenet
                <User age={this.state.users[0].age}>{this.state.users[0].age}</User>
                <User age={this.state.users[1].age}>{this.state.users[0].age}</User>
                <User >Pranava</User>
            </div>
        )
    }
}
export default Users;