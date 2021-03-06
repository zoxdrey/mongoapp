import Table from 'react-bootstrap/Table'

export default function ByDayTable({data}){
    return (
      
    <div className="block by-day">
    <div className="table-title"><h1>BY DAY TABLE</h1></div>
    <Table id="by-day-table" className="by-day-table"striped bordered hover size="sm" variant="dark">
  <thead>
    <tr>
        <th>id</th>
      <th>Day</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    {data.map(item => {
        return (
            <tr>
            <td>{item._id}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            </tr>
            )
    })}
      </tbody>
</Table></div>)
}