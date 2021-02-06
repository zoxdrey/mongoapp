import React from "react";
import Timer from './components/Timer.js'
import TotalTime from './components/TotalTime.js'
import './App.css';
import ByDayTable from "./components/ByDayTable.js";
import Axios from 'axios';

const url  = "http://127.0.0.1:3001/api/time";
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      tableData : []
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    return Axios.get(url).then(res => this.setState({tableData: res.data}))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="main-container">
          <TotalTime totalTimeInHours={1}/>
          <Timer />
          <ByDayTable data={this.state.tableData}/>
        </div>
    </div>
  );}
  
}

export default App;
