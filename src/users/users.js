import React, {Component} from 'react';
import User from './user';

const users = [
    {name:"ishant", age:27},
    {name:"jinks", age: 26},
    {name:"pranava", age:26}
  ];

class Users extends Component{
    constructor(props){
        super(props);

        this.state ={
            users
        }
    }
    addItemInArrayState=(e)=>{
        console.log(e);
    }
    makeMeYounger=()=>{
        console.log("clicked");
        // this.setState({
        //     users:[
        //         {name:"ishant", age:25},
        //         {name:"jinks", age: 24},
        //         {name:"pranava", age:24}
        //       ]
        // });
        const newState = this.state.users.map((user)=>{
            const tmpUser= user;
            tmpUser.age -=2;
            return tmpUser;
        })
        this.setState({users:newState})
    }

    deleteAllUsers(){
        console.log('delete Users');
        this.setState({users:[]});
    }

    resetAllUsers = ()=>{
        this.setState({users});
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                Hello from class component, Handson with Array maniculaions
                {
                    this.state.users.map((user)=>{
                       return <User age={user.age}>{user.name}</User>
                    })
                }
                <div><button onClick={this.makeMeYounger}>Make me younger by 2 yrs</button></div>
                <div><button onClick={this.deleteAllUsers.bind(this)}>DeleteAllUsers</button></div>
                <div><button onClick={this.resetAllUsers}>ResetAllUsers</button></div>
                <h2>To add value in array</h2>
                <input id="name" type="text" onChange={this.addItemInArrayState}></input>
                <button onClick={this.addItemInArray}>Add Item</button>
            </div>
        )
    }
}
export default Users;