import React,{Component} from 'react';

function Score(props){
    return (<div>Score: {props.val}</div>)
  }

  class Parent extends Component {
    constructor(props){
      console.log("Constructor-pure Comp");
      super(props);
      this.state={
        val:1
      }
    }

        componentWillMount(){
          console.log("pure Comp comonenet will mount -pure Comp");
          
        }
        componentDidMount(){
          console.log("pure Comp component did mount-pure Comp");
          //example football game score:
           setInterval(()=>{
            this.setState(()=>{
              return{val:Math.floor(Math.random()*10)}
            })
          },2000) 
        }
        shouldComponentUpdate(nextProps,nextState){
          console.log("pure Comp should component update")
          //here  I am checking the state
          console.log('nextState',nextState);
          console.log('currentState',this.state);
          console.log('nextProps',nextProps)
          return (this.state.val === nextState.val? false:true);
        }
        componentWillUpdate(){
          console.log("pure Comp component will update-pureComp");
        }
        componentDidUpdate(prevProps,prevState){
          console.log("pure Comp component did Update-pureCOmp");
        }
    render() {
      console.log("pure Comp render");
      return (
        <div >       
         <Score val={this.state.val}/>
        </div>
      );
    }
  }
  
  
 
 
  export default Parent;
  