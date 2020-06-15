import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){ 
    super(props)
    this.state={
    new_val:'',
    list:[],
}
}
handleSubmit=(evnt)=>{
  evnt.preventDefault();
  var list=this.state.list;
  list.push(this.state.new_val);
  this.setState({list})
  this.setState({new_val:''})
}
 handleRemove=(evnt)=>{
  evnt.preventDefault();
  var list=this.state.list;
  list.splice(evnt.target.id,1);
  this.setState({list})
 }
render(){
  return (
    <div className="main">
      <form>
        <input type="text" value={this.state.new_val} onChange={(e)=>{this.setState({new_val:e.target.value})}} />
        <button onClick={this.handleSubmit}>+</button>
      </form>

      <ol>
       { this.state.list.map((val,i)=> <li id={i}><button id={i} onClick={this.handleRemove}>[X]</button>{val}</li>) }
      </ol>
    </div>
  );
}
}

export default App;
