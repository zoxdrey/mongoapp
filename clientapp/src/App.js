import React from "react";
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    fetch("http://127.0.0.1:3001/api/users").then(res => res.json()).then(data => {
    this.setState({users: data});
    ;}
  );
  }

  render(){
  console.log(this.state.users.name)
  return (
    <div className="App">
      <header className="App-header">
        {this.state.users.map(data => <p> {data.name} </p>)}
      </header>
    </div>
  );}
  
}

export default App;
