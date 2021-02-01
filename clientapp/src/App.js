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
       
      </header>
      <body className="main-container">
      <div >
        <form  className="main-form">
          <label>User</label>
          <input type="text"></input>
          <label>Age</label>
          <input type="text"></input>
          <div className="main-from__buttons">
            <button>Add</button>
            <button>Add</button>
          </div>
        </form>
      </div>
      <UserList data={this.state.users}/>
      </body>
    </div>
  );}
  
}

export default App;
