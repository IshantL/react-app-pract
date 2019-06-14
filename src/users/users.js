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
    makeMeYounger=()=>{
        console.log("clicked");
        this.setState({
            users:[
                {name:"ishant", age:25},
                {name:"jinks", age: 24},
                {name:"pranava", age:24}
              ]
        });
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                Hello from class componenet
                <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
                <User age={this.state.users[1].age}>{this.state.users[0].name}</User>
                <User >Pranava</User>
                <button onClick={this.makeMeYounger}>Make me younger by 2 yrs</button>
            </div>
        )
    }
}
export default Users;