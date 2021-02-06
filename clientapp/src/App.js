import React from "react";
import Timer from './components/Timer.js'
import TotalTime from './components/TotalTime.js'
import './App.css';
import ByDayTable from "./components/ByDayTable.js";
import Axios from 'axios';

const url  = "http://127.0.0.1:3001";
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      tableData : [],
      totalTime : 0
    }
    this.getData = this.getData.bind(this);
    this.getTotalTime = this.getTotalTime.bind(this);
  }

  componentDidMount(){
    this.getData();
    console.log(this.state)
    this.getTotalTime()
  }

  getData(){
    Axios.get(url+"/api/time").then(res => this.setState({tableData: res.data}))
  }

  getTotalTime(){
   return Axios.get(url+"/api/totaltime").then(res => this.setState({totalTime: res.data}))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="main-container">
          <TotalTime totalTimeInHours={this.state.totalTime}/>
          <Timer />
          <ByDayTable data={this.state.tableData}/>
        </div>
    </div>
  );}
  
}

export default App;
