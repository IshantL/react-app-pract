import React,{Component} from 'react';

class RefDemo extends Component{
    clickEvent=()=>{
        console.log("Hellooooo from ref");
        console.log(this.firstname);
    }
    onKeyUp = (target, e)=>{
        console.log(e.keyCode);
        if(e.keyCode === 13){
            switch(target){
                case 'firstname':
                this.lastname.focus();
                break;
                case 'lastname':
                this.age.focus();
                break;
                case 'age':
                this.submit.focus();
                break;
                default:
                this.firstname.focus();
            }
            this.lastname.focus();
        }
    }
    render(){
     
return(
<div>
    <h1>RefDemo</h1>
    <div><span>First Name:</span>
    <input ref={(input)=>{this.firstname = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'firstname')}/>
    
    </div>
    <div><span>Last Name:</span>
    <input ref={(input)=>{this.lastname = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'lastname')}/>
    </div>
    <div><span>Age:</span>
    <input ref={(input)=>{this.age = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'age')}/>
    </div>
    <div>
    <input type="submit" ref={(input)=>{this.submit = input}}  onClick={this.clickEvent}/>
    </div>

</div>)
    }
}
export default RefDemo;