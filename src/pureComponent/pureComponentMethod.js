import React,{Component, PureComponent} from 'react';

function Score(props){
    return (<div>Score: {props.val}</div>)
  }

  class PureComponentMethod extends PureComponent {
    constructor(props){
      console.log("PureComponentMethod-Constructor");
      super(props);
      this.state={
        val:1
      }
    }

        componentWillMount(){
          console.log("PureComponentMethod- comonenet will mount -pure Comp");
          
        }
        componentDidMount(){
          console.log("PureComponentMethod- component did mount-pure Comp");
          //example football game score:
           setInterval(()=>{
            this.setState(()=>{
              return{val:1}
            })
          },2000) 
        }
        /* shouldComponentUpdate(nextProps,nextState){
          console.log("PureComponentMethod-should component update")
          //here  I am checking the state
          //console.log('nextState',nextState);
         // console.log('currentState',this.state);
          //console.log('nextProps',nextProps)
         // return (this.state.val === nextState.val? false:true);
         return true;
        } */
        componentWillUpdate(){
          console.log("PureComponentMethod component will update-pureComp");
        }
        componentDidUpdate(prevProps,prevState){
          console.log("PureComponentMethod component did Update-pureCOmp");
        }
    render() {
      console.log("PureComponentMethod render");
      return (
        <div >       
         <Score val={this.state.val}/>
        </div>
      );
    }
  }
  
  
 
 
  export default PureComponentMethod;
  