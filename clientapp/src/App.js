import React from "react";
import './App.css';
import UserList from "./usersList";

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
       <UserList data={this.state.users}/>
      </header>
    </div>
  );}
  
}

export default App;
