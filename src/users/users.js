import React, {Component} from 'react';
import User from './user';

//here we extract only array
const users = [
    {name:"ishant", age:27},
    {name:"jinks", age: 26},
    {name:"pranava", age:26}
  ];
//we can also extract the complete state
// const INITIAL_STATE = {
//     users : [
//         {name:"ishant", age:27},
//         {name:"jinks", age: 26},
//         {name:"pranava", age:26}
//       ]
//   };
  
class Users extends Component{
    constructor(props){
        super(props);

        this.state ={
            users,
            name:'',
            age:18
        }
    }
    addItemInArrayState=(e)=>{
        console.log(e);
        //this.setState({name:e.target.value});
        this.setState({[e.target.name]: e.target.value})
    }
    addItemInArray =()=>{
        debugger;
        this.setState({
        //users:this.state.users.concat({name: this.state.name, age : this.state.age})   
        users:[...this.state.users, {name: this.state.name, age : this.state.age}]

        });
        //another approch
       /*  this.setState(state => {
        const users = this.state.users.concat({name: this.state.name, age : this.state.age});
        return {
        users,
        value: '',
        age:0
        }; 
    });*/
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
       // this.setState({...INITIAL_STATE})
    }
    onUpdateItem=(i)=>{
        console.log(i);
       const newstate =  this.state.users.map((user,j)=>{
           var newObj={};

            if(i===j){
                newObj.name=user.name;
                newObj.age=user.age+1;
               return newObj;
                   
            }else{
                return user;
            }
        });
        this.setState({users:newstate})
        console.log(newstate);
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                Hello from class component, Handson with Array maniculaions
                {
                    this.state.users.map((user,index)=>{
                       return (
                           <div>
                             <User age={user.age}>{user.name}</User>
                       <button
                       type="button"
                       onClick={() => this.onUpdateItem(index)}
                     >
                       Make me one year older
                     </button>
                            </div>
                       );
                      
                    })
                }
                <div><button onClick={this.makeMeYounger}>Make all users younger by 2 yrs</button></div>
                <div><button onClick={this.deleteAllUsers.bind(this)}>DeleteAllUsers</button></div>
                <div><button onClick={this.resetAllUsers}>ResetAllUsers</button></div>
                <h2>To add item to array</h2>
                Name:<input id="name" type="text" name="name" onChange={this.addItemInArrayState}></input>
                Age:<input id="name" type="text" name="age" onChange={this.addItemInArrayState}></input>
                <div><button onClick={this.addItemInArray}>Add Item</button></div>
                <h2>React State: Update item in array</h2>
            </div>
        )
    }
}
export default Users;